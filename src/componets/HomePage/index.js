import {Outlet} from "react-router-dom";
import {} from "react-router-dom";

import Index from "./PersonalInfo";
import SearchMBTA from "./Feed"
import {useEffect, useState} from "react";
import SecureRoute from "../../secure-route";

const HomePage = () => {
    let loggin = false
    return (
        <div className="row">
            <div className="col-8">
                <Outlet/>
            </div>
            <div className="col-4">
                <SecureRoute><Index/></SecureRoute>
            </div>
        </div>
    )
}

export default HomePage