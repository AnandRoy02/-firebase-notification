import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//initialize firebase
var firebaseConfig = {
    //place you firebase config here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;