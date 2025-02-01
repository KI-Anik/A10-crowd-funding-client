/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        loginWithGoogle,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;