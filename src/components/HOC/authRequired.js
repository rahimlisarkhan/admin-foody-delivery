import { Redirect } from "react-router-dom"

export const AuthHOC = HocComponent => {

    return () => {
        let accessAuth = localStorage.getItem("auth") || false
        
        if (accessAuth === "true") {
            return <HocComponent />
        }

        return (
            <Redirect to="/login" />
        )
    }
}
