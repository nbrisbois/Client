import {useRef, useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";

const SearchChannel = () => {
    const [currentUser, setCurrentUser] =
        useState({})

    const [videos, setVideos] = useState([])
    const vidRef = useRef()
    const MBTA_URL ='https://www.googleapis.com/youtube/v3/search?key=AIzaSyC46FMoWK2LWBozsMED-9y38QRgReY9im4&channelId=UC6nSFpj9HTCZ5t-N3Rm3-HA&part=snippet,id&order=date&maxResults=100&type=video&q'
    const searchVideo = async () => {
        const response = await axios.get(`${MBTA_URL}=${vidRef.current.value}`)
        setVideos(response.data.items)
    }
    return (
        <div>
            <h1>Search Channel</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-primary float-end"
                            onClick={searchVideo}>
                        Search
                    </button>
                    <input ref={vidRef}
                           className="form-control w-75"/>
                </li>
                {
                    videos.map(video =>
                        <li className="list-group-item">
                            <img src={video.snippet.thumbnails.default.url} height={20}/>
                            <Link to={`/${video.id.videoId}`}>
                                {video.snippet.title}
                            </Link>
                        </li>
                    )}
            </ul>
        </div>
    )
}

export default SearchChannel