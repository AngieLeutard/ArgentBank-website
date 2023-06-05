import {useState} from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [titleText, setTitleText] = useState('Welcome back');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [point, setPoint] = useState('!');
  const [userName, setUserName] = useState('');



  const handleClick = () => {
    setIsActive(current => !current);
    setTitleText('Edit user name');
    setUserFirstName('');
    setUserLastName('');
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
                    <input type="text" id="userName" onChange={(e) => setUserName(e.target.value)}/>
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