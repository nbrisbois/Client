import {Outlet, Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="row">
            <div className="col-2">
                <Outlet/>
            </div>
            <div className="col-5">
                <h1 className="text-center">Join Our V-Sauce Community!</h1>
                <h4 className="mt-5">Yes this is a community, It really only exists because google database api is easy to use</h4>
                <h4>Want to checkout our site first?</h4>
                <h4><Link to="/"> Checkout our homepage!</Link></h4>
            </div>
            <div className="col-5">
                <img className="mt-4 float-end" src="./images/the-sause.jpg" width="500" height="700"/>
            </div>
        </div>
    )
}
export default LoginPage