import firebase from 'firebase' ;

const firebaseConfig = {
  apiKey: "AIzaSyBDuheI5qV-7DS7tBLaYMkPPo4dO9E01M4",
  authDomain: "tinder-clone-e3404.firebaseapp.com",
  databaseURL: "https://tinder-clone-e3404.firebaseio.com",
  projectId: "tinder-clone-e3404",
  storageBucket: "tinder-clone-e3404.appspot.com",
  messagingSenderId: "752899468107",
  appId: "1:752899468107:web:e3c7d4edef3f98d013d6ce",
  measurementId: "G-Y9SMQRV0JM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider }; 
export default db; 