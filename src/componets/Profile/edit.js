import {useProfile} from "../../user-tools/context/user-context"
import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";


const Edit = () => {
    const {update}  = useProfile()
    const navigate = useNavigate
    const avatarRef = useRef()
    const updateUser = async () => {
        // try {
            await update(
                avatarRef.current.value,
            )
        console.log("I am reached")
            navigate("/profile")
        // } catch (e) {
        //     console.log(e)
        //     alert("User does not exists")
        // }
    }

    return (
        <div>
            <h1>HELLO</h1>
            <input type="file" ref={avatarRef} id="img" name="img" accept="image/*"/>
            <button onClick={updateUser}>Submit</button>
        </div>
    )
}
export default Edit