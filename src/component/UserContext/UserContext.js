import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const facebookSignIn = (email, password) => {
        return signInWithFaceBook(auth, email, password)
    }

    const githubSignIn = (email, password) => {
        return signInWithGitHub(auth, email, password)
    }





    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const signInWithFaceBook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const signInWithGitHub = () => {
        return signInWithPopup(auth, githubProvider)
    }



    const logOut = () => {
        return signOut(auth);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state change', currentUser);
        });

        return () => unSubscribe();

    }, [])


    const authInfo = { user, loading, createUser, signIn, signInWithGoogle, facebookSignIn, signInWithFaceBook, signInWithGitHub, githubSignIn, logOut }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default UserContext;
