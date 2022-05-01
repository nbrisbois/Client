import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../user-tools/context/user-context";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findCommentsByUser} from "../../video-tools/actions/comment-action";
import SecureContent from "../../secure-content";

const Profile = () => {
    const homeButton = () => {
        navigate('/')
    }
    const userLogout = () => {
        logout()
        navigate('/')
    }
    const posts = useSelector(state => state.commentReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {logout} = useProfile()
    const {profile} = useProfile()
    useEffect(() => {
        findCommentsByUser(dispatch, profile._id)
    })
    return (
        <div className="row">
            <div className="col-3 mt-2">
                <img className="me-2" src={profile.avatar} width="300" height="300"/>
                <Link to="/profile/edit">edit profile</Link>
            </div>
            <div className="col-5">
                <h1>Hello, {profile.name}</h1>
            </div>
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <h1 className="text-decoration-underline">User Options</h1>
                    </li>
                    <li className="list-group-item text-center">
                        <button type="submit" onClick={
                            () =>
                                homeButton()
                        } className="btn btn-primary mt-1 me-2 "><p>Home</p></button>
                        <button type="submit" onClick={
                            () =>
                                userLogout()
                        } className="btn btn-primary mt-1 ms-2"><p>Logout</p></button>
                    </li>
                    { posts !== undefined &&
                        posts.map(comment =>
                            <li key={comment._id} className="list-group-item">
                                <div className="row">
                                    <div className="col-4">
                                        <h3>{comment.username}</h3>
                                        <img className="rounded-pill" src={comment.avatar} width="50" height="50"/>
                                    </div>
                                    <div className="col-8">
                                        <p>{comment.comment}</p>
                                        <span>Likes {comment.likes}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Profile