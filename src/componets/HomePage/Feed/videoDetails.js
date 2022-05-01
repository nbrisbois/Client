import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState, useEffect, useRef} from "react";
import {useProfile} from "../../../user-tools/context/user-context";
import {findUser} from "../../../user-tools/services/user-service";
import SecureContent from "../../../secure-content"
import {createComment, findCommentsByVideo, updateComment, deleteComment} from "../../../video-tools/actions/comment-action";
import {useDispatch, useSelector}
    from "react-redux";

const VideoDetails = () => {
    const URL = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC46FMoWK2LWBozsMED-9y38QRgReY9im4&part=snippet,statistics&fields=items(id,snippet,statistics)'
    const id = useParams()
    const {profile} = useProfile()
    const dispatch = useDispatch()
    const commentRef = useRef()
    const posts = useSelector(state => state.commentReducer);
    const navigate = useNavigate()
    const [currentUser, setUser] = useState({})
    const [params, setParams] =
        useState({
            "title": "",
            "description": "",
            "thumbnails": {
                "high": {
                    "url": "",
                }
            },
        })
    const fetchVideo = async () => {
        const response = await axios(`${URL}&id=${id.vidID}`)
        setParams(response.data.items['0'].snippet)
    }

    const backButton = () => {
        navigate('/')
    }
    useEffect( () => {
        fetchVideo()
        findCommentsByVideo(dispatch, id.vidID)
    }, [])
        return (
            <div className="row">
                <div className="col-3 text-center">
                    <img src={params.thumbnails.high.url} height={150} width={200}/>
                    <button className="btn btn-primary mt-2" onClick={backButton}>Back</button>
                </div>
                <div className="col-9">
                    <h1>{params.title}</h1>
                    <p>{params.description}</p>
                        <SecureContent>
                            <textarea ref={commentRef} className="form-control"></textarea>
                            <button onClick={ () => createComment(dispatch, profile._id, id.vidID,
                                {comment: commentRef.current.value,
                                    commenter : profile._id}, profile)}   className="btn-primary btn">
                                Post
                            </button>
                        </SecureContent>
                    <ul className="list-group">
                        { posts !== undefined &&
                            posts.map(comment =>
                                <li key={comment._id} className="list-group-item">
                                    <div className="row">
                                        <div className="col-3 text-center">
                                            <h3>{comment.username}</h3>
                                            <img className="rounded-pill" src={comment.avatar} width="50" height="50"/>
                                        </div>
                                        <div className="col-8">
                                            <p>{comment.comment}</p>
                                            <span className="me-2">Likes  {comment.likes}   <SecureContent><i onClick={() => updateComment(dispatch, comment, profile._id)} className="fas fa-thumbs-up"></i></SecureContent></span>
                                        </div>
                                        <div className="col-1">
                                            <SecureContent>{comment.commenter === profile._id &&
                                                <i className="fas fa-times-circle" onClick={() => deleteComment(dispatch, comment)} ></i>}</SecureContent>
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

export default VideoDetails