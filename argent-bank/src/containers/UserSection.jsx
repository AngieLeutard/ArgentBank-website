import '../index.css';

import CheckingAccount from '../components/CheckingAccount';
import SavingsAccount from '../components/SavingsAccount';
import CreditCard from '../components/CreditCardAccount';

function UserSection() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <CheckingAccount />
            <SavingsAccount />
            <CreditCard />
        </main>
    )
}

export default UserSection