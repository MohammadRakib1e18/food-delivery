import initializeFirebase from "./../Login/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    const auth = getAuth();

    const registerUser = (
        email,
        password,
        name,
        history,
        location
    ) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const newUser = {
                    email,
                    displayName: name,
                };
                setUser(newUser);
                // save the user to database.user
                // saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    email: email,
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {});
                history.replace("/");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // const saveUser = (email, displayName) => {
    //     const user = { email, displayName };
    //     fetch("https://intense-temple-81535.herokuapp.com/users", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(user),
    //     }).then();
    // };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // useEffect(() => {
    //     fetch(`https://intense-temple-81535.herokuapp.com/users/${user.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setIsAdmin(data));
    // }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    };
};

export default useFirebase;
