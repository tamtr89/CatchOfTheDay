import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC_Geji-RdMA1VeMH9-c2JRpNlmlHiHU2Y",
        authDomain: "catch-of-the-day-tam.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-tam.firebaseio.com" 
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named Export
export { firebaseApp };

// This is a default export
export default base;