import {Link} from "react-router-dom";

const Unknown = () => {
    return (
        <div>
            <h4>To view friends you must be <Link to="login">logged in</Link> in</h4>
        </div>
    )
}

export default Unknown