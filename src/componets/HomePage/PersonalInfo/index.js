import {Navigate, useNavigate} from "react-router-dom";
import {useProfile} from "../../../user-tools/context/user-context";
import {useSelector} from "react-redux";


const Index = () => {
    const posts = useSelector(state => state.commentReducer);
    const {profile} = useProfile()
    const navigate = useNavigate()
    const profileHandler = () => {
        navigate('/profile')
    }
    return (
        <div>
            <div className="text-center">
                <h2>Here is your feed, {profile.name}</h2>
                <button className="btn btn-primary" onClick={profileHandler}>Home</button>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default Index