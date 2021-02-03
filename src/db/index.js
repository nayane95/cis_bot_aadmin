import firebase from 'firebase'
import 'firebase/firestore'


  const config = {
    apiKey: "AIzaSyC0JEDRv1Mob6bDHceUoou7tcJp-v3g6bE",
    authDomain: "cis-bot-yhrvph.firebaseapp.com",
    databaseURL: "https://cis-bot-yhrvph.firebaseio.com",
    projectId: "cis-bot-yhrvph",
    storageBucket: "cis-bot-yhrvph.appspot.com",
    messagingSenderId: "735643769687",
    appId: "1:735643769687:web:6fd75612ed5e452f72fc12",
    measurementId: "G-ZRWTYF87GQ"
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(config)
  const db = firebase.firestore();
  export default db 

  
