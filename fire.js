import firebase from "firebase";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAP7r6QNtVNmJ4UWyT3sdB_BxA6TScJ4OY",
  authDomain: "justhack-63e16.firebaseapp.com",
  databaseURL: "https://justhack-63e16.firebaseio.com",
  projectId: "justhack-63e16",
  storageBucket: "justhack-63e16.appspot.com",
  messagingSenderId: "90229453972",
  appId: "1:90229453972:web:e655bb519304b27ead7081",
  measurementId: "G-DCBDCP7B0Q",
};
const fire = firebase.initializeApp(config);
export default fire;
