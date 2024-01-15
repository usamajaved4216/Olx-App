import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDNm1iXlzJezANtXytGRwes4yGxP2h9ztg",
    authDomain: "olx-app-13128.firebaseapp.com",
    projectId: "olx-app-13128",
    storageBucket: "olx-app-13128.appspot.com",
    messagingSenderId: "94648987534",
    appId: "1:94648987534:web:4d7501da3a7e0c0f763edf",
    measurementId: "G-CKSY3GF4P5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const SignUp =(userInfo)=>{
  const {email, password}=userInfo 

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      alert('successfully')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage)
    });

}  

const login = (userInfo)=>{
  const {email, password}=userInfo 
  
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('Login SuccessFully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}




export {
  SignUp,
  login
}
