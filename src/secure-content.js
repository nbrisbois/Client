import {useProfile} from "./user-tools/context/user-context";

const SecureContent = ({children}) => {

    const {profile} = useProfile()
    if(profile && profile.name) {
        return (children)
    }
    else {
        return null
    }
}

export default SecureContent