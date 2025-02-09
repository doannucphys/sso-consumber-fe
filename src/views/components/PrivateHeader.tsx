import {  MouseEvent } from "react"
import { useAuth } from "@hooks/useAuth"

export const PrivateHeader = () => {
    const { user } = useAuth()
    const ssoUrl = import.meta.env.VITE_SSO_APP;
    const uiUrl = import.meta.env.VITE_URL;

    const handleLogout = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        
        if ((user && (user?.name || user?.username || user?.id))) {
            window.location.href = `${ssoUrl}/logout?url=${uiUrl}`
        }
    }
     return (
        <div className="w-full h-my_header bg-blue-200 shadow-xl flex items-center justify-end px-5">
            <div className="flex items-center space-x-3">
            <p>{user.username}</p>
            { user && 
            <button 
            className="px-3 py-2 rounded-xl shadow-2xl bg-red-200 hover:bg-green-200 cursor-pointer" 
            onClick={e => handleLogout(e)}>
                Logout
                </button> }
            </div>
        </div>
     )
}