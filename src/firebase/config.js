import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAtojOGOwzjAfERia2o60OQIvYeR1ewMjQ",
  authDomain: "react-redux-hooks-e8e17.firebaseapp.com",
  databaseURL: "https://react-redux-hooks-e8e17.firebaseio.com",
  projectId: "react-redux-hooks-e8e17",
  storageBucket: "react-redux-hooks-e8e17.appspot.com",
  messagingSenderId: "845339164397",
  appId: "1:845339164397:web:48c7a861ce2f1ac0e7d6e4",
  measurementId: "G-MB1HY5CQ2B",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  async signUp(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });

    return user;
  }

  async signIn(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });

    return user;
  }

  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
      });
    return logout;
  }
}

export default new Firebase();
