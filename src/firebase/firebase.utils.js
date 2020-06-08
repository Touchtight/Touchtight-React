import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBU2sVFVL22vZguY05EUQNVHDanyS9--KI",
    authDomain: "touchtight-coaching.firebaseapp.com",
    databaseURL: "https://touchtight-coaching.firebaseio.com",
    projectId: "touchtight-coaching",
    storageBucket: "touchtight-coaching.appspot.com",
    messagingSenderId: "113404113035",
    appId: "1:113404113035:web:96c23e6be0b3b03720e48e",
    measurementId: "G-QY814DRCE9"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;