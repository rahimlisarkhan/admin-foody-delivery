import { AuthHOC } from "../../components/HOC/authRequired"
import LoginContainer from "../../features/login/LoginContainer"


const Login = () => {

    return(
        <LoginContainer/>
    )
}


export default AuthHOC(Login)