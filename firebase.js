import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfvGlR53MFRPL7fcxZUDQhr9itP4MepdM",
  authDomain: "rivalsyahproject.firebaseapp.com",
  projectId: "rivalsyahproject",
  storageBucket: "rivalsyahproject.appspot.com",
  messagingSenderId: "702312727302",
  appId: "1:702312727302:web:589db07157687c76bbd487",
  measurementId: "G-FVEQ1KE2W5"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}
//const app = initializeApp(firebaseConfig);

//const db = firebase.firestore()
const auth=firebase.auth()
export default firebase
export {auth}