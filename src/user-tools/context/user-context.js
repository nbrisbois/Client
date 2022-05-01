import React, {useContext, useState} from "react";
import * as service from "../services/user-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState({})

    const login = async (email, password) => {
        try {
            const p = await service.login(
                email,
                password
            )
            setProfile(p)
        } catch (e) {
            throw e
        }
    }

    const update = async (avatar = profile.avatar) => {
        const p = await service.update(avatar)
        return p
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile()
            setProfile(p)
            return p
        } catch (e) {
            throw e
        }
    }

    const logout = async  () => {
        const response = await service.logout()
        setProfile(null)

    }


    const register = async (name, username, email, password) => {
        try {
            const newUser = await service.register(
                name,
                username,
                email,
                password
            )
            setProfile(newUser)
        } catch (e) {
            throw e
        }
    }

    const value = {profile, register, login, checkLoggedIn, update, logout}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}