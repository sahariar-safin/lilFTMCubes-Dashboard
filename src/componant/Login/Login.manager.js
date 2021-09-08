import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const signInWithPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            // Signed in
            await setToken();
            var user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return errorMessage;
        });
}

const setToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
        });
}