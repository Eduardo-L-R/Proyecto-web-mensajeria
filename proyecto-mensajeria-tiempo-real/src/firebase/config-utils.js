import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfPkCrUhfkH4VUZR0cg2IGuKKjajrNRoo",
  authDomain: "proyecto-web-mensajeria.firebaseapp.com",
  databaseURL: "https://proyecto-web-mensajeria.firebaseio.com",
  projectId: "proyecto-web-mensajeria",
  storageBucket: "proyecto-web-mensajeria.appspot.com",
  messagingSenderId: "780038003961",
  appId: "1:780038003961:web:c27927e55fb4f276409628"
};

//Para evitar que se ejecute dos veces el método initializeApp
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.auth();
