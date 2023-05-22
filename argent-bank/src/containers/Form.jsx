import '../index.css'

import FormInputUsername from '../components/FormInputUsername'
import FormInputPassword from '../components/FormInputPassword'
import FormInputRemember from '../components/FormInputRemember'

function Form() {
    return (
        <form>
            <FormInputUsername />
            <FormInputPassword />
            <FormInputRemember />
            <a href="./user.html" className="sign-in-button">Sign In</a>
        </ form>
    )
}

export default Form