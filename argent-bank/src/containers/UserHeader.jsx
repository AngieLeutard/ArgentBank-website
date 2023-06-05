import { Link } from 'react-router-dom'; 
// import PropTypes from 'prop-types';
import argentBankLogo from '../assets/argentBankLogo.png';
import '../../src/index.css';

export const UserHeader = (name) => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={ argentBankLogo } alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/user">
                    <i className="fa fa-user-circle"></i>
                    salut
                    {/* { name } */}
                </Link>
                <Link className="main-nav-item" to="/">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    )
}

// UserHeader.propTypes = {
//     name: PropTypes.string,
// }

export default UserHeader