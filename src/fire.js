import firebase from "firebase"
  var firebaseConfig = {
    apiKey: "AIzaSyDsR95qtQ85lmPncRMXVJyYHisjbdUGeuo",
    authDomain: "byte-a3c58.firebaseapp.com",
    projectId: "byte-a3c58",
    storageBucket: "byte-a3c58.appspot.com",
    messagingSenderId: "751394460840",
    appId: "1:751394460840:web:f1cced3acef78e6aaf9e9d",
    measurementId: "G-4RVWHL3KZQ"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire