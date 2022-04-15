import {Outlet} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="row">
            <div className="col-10">
                <h1>Hello</h1>
            </div>
            <div className="col-2">
                <Outlet/>
            </div>
        </div>
    )
}
export default LoginPage