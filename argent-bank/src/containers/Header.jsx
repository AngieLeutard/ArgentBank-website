import { Link } from 'react-router-dom'; 
import argentBankLogo from '../assets/argentBankLogo.png'
import '../style/header.css'

function Header() {
    return (
        <div className='header_wrapper'>
            <img src={argentBankLogo} alt='logo' className='header_logo' />
            <nav className='header_nav'>
                <Link to="/sign-in" className='header_link'>Log in</Link>
            </nav>
        </div>
        
    )
}

export default Header