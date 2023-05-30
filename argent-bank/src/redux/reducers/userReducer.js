import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: {
        email:'',
        token:''
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
                    console.log(res)
                    return res.json()
                } else {
                    throw new Error("Informations incorrectes !")
                }             
            }).then(data => {
                return data
            })
            return { email: email, data: response }            
        }catch(error){
            console.log(error.message)
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(userLogIn.fulfilled, (state, action) => {
            state.user = { email: action.payload.email, token: action.payload.data.body.token }
            state.status = "succes"
            state.error = "" 
            window.location.href = 'http://localhost:3000/user';      
        })
        .addCase(userLogIn.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload
        })
    }
})

export default userSlice.reducer