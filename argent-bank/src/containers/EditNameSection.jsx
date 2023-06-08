import {useState} from 'react';
import { useSelector } from 'react-redux';


export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [titleText, setTitleText] = useState('Welcome back');
  const [point, setPoint] = useState('!');

  const userName = useSelector(state => state.user.userName);
  const userFirstName = useSelector(state => state.user.firstName);
  const userLastName = useSelector(state => state.user.lastName)





  const handleClick = () => {
    setIsActive(current => !current);
    setTitleText('Edit user name');
    setPoint('');
  };

  return (
    <div>
        <h1 className='userEdit_title' >{titleText}<br/>{userFirstName} {userLastName} {point}</h1>
        <div className='userName'>
            <form 
                className='userName_form' 
                id="userNameEdit"
                style={{display: isActive ? 'flex' : 'none',}}
            >
                <div className="userName_input">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" />
                </div>
                <div className="userName_input">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={userFirstName}/>
                </div>
                <div className="userName_input">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="LastName" value={userLastName}/>
                </div>
                <div className='userNameButton_wrapper'>
                    <button 
                        className="userName_button"
                        disabled={!userName}>
                        Save
                    </button>
                    <button 
                        className="userName_button" 
                        onClick={
                            (e) => {
                                e.preventDefault()
                            }}>
                        Delete
                    </button>
                </div>
            </ form>
        </div>
        <button
            className="edit-button"
            style={{
            display: isActive ? 'none' : '',
            }}
            onClick={handleClick}
        >
            Edit Name
        </button>
    </div>
  );
}