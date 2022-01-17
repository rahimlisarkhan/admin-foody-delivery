import { Redirect } from "react-router-dom"

export const AuthHOC = HocComponent => {

    return () => {
        let accessAuth = localStorage.getItem("auth")
        console.log(accessAuth);
        if (accessAuth === "true") {
            return <HocComponent />
        }

        return (
            <Redirect to="/login" />
        )
    }
}
