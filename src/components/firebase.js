import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCeLKRD_KB3CVCFJsV2wviuVcuOrd1MrlU",
    authDomain: "blogz-5ee74.firebaseapp.com",
    databaseURL: "https://blogz-5ee74-default-rtdb.firebaseio.com",
    projectId: "blogz-5ee74",
    storageBucket: "blogz-5ee74.appspot.com",
    messagingSenderId: "312945649955",
    appId: "1:312945649955:web:3bd3a00632778eb8f00496"
};

firebase.initializeApp(config);

export default firebase;