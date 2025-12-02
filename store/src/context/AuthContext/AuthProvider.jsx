import { AuthContext } from "./AuthContext";
import { useState } from "react";

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState (() => {
        const saved = sessionStorage.getItem("session");
        if (saved) {
            return JSON.parse(saved);
        } else {
            return null;
            }

        
    });
    const login = (name,password) => {
        if (name === "admin" && password === "1234"){
            const session = { name };
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    return <AuthContext.Provider value={{ user, login, logout }}>
        {Children}
    </AuthContext.Provider>;
};