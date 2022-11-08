import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzyBvI0XDe3VxGH2XQTkaybqek6ixQhZk",
  authDomain: "auth-milos.firebaseapp.com",
  projectId: "auth-milos",
  storageBucket: "auth-milos.appspot.com",
  messagingSenderId: "397306652769",
  appId: "1:397306652769:web:fb17618801d4654647a220",
  measurementId: "G-0GZ7965X2S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
