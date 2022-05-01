import {useEffect, useState} from "react";
import {useProfile} from "./user-tools/context/user-context";
import {Navigate, useNavigate} from "react-router-dom";

const SecureRoute = ({children}) => {
    const navigate = useNavigate()
    const loginHandler = () => {
        navigate('/login')
    }
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            setCurrentUser(user)
            setWaiting(false)
        } catch (e) {
            setWaiting(false)
        }
    }
    useEffect(() => { check() }, [])

    if(currentUser) {
        return children
    } else if(waiting) {
        return null
    } else {
        return (
            <div className="mt-3">
                <h2 className="text-center">Login to view this content</h2>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-25" onClick={loginHandler}>Login</button>
                </div>
            </div>
        )
    }

}

export default SecureRoute