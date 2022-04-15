import {Link} from "react-router-dom";

import Unknown from "./PersonalInfo/unknown";

const HomePage = () => {
    const loggin = false
    return (
        <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">

            </div>
            <div className="col-4">
                {!loggin && <Unknown/>}
            </div>
        </div>
    )
}

export default HomePage