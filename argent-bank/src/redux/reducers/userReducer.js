import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'


const initialState = {
    user: {
        email:'',
        token:'',
        password: '',
        firstName: '',
        lastName: '',
        userName: ''
    },
    status: 'idle',
    error: '',
}


export const userLogIn = createAsyncThunk(
    'user/logIn',
    async ({ email, password }, thunkApi) => {
        try{
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ email, password })
            }).then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Informations incorrectes !")
                }             
            }).then(data => {
                return data
            })
            return { email: email, password: password, data: response }            
        }catch(error){
            console.log(error.message)
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const getUserInfos = createAsyncThunk(
    'user/getUserInfos',
    async (thunkApi) => {
        const token = useSelector(state => state.user.token)
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(res => {
            if (res.ok) {
                console.log(res)
                return res.json()
            }            
        })
        return response        
    }
)

export const changeUserName = createAsyncThunk(
    'user/changeUserName',
    async ({ userName }, thunkApi) => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ userName })
        }).then(res => {
            if (res.ok) {
                console.log(res)
                return res.json()
            }            
        })
        return response        
        }
)

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(userLogIn.fulfilled, (state, action) => {
            state.user = { email: action.payload.email, password: action.payload.password, token: action.payload.data.body.token }
            state.status = "succes"
            state.error = "" 
        })
        .addCase(userLogIn.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload
        })
        .addCase(getUserInfos.fulfilled, (state, action) => {
            state.user = { email: action.payload.email, password: action.payload.password, firstName: action.payload.firstName, lastName: action.payload.lastName, userName: action.payload.userName  }
            state.status = "succes"
            state.error = ""
        })
        .addCase(getUserInfos.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload
        })
        .addCase('LOGOUT', (state) => {
            state.user = { token: '' }
            state.status = 'idle'
            state.error = ''
        })
    }
})

export default userSlice.reducer