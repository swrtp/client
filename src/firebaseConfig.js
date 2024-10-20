import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAfAfhguItBqM-TIxsX8RNqAQiDO18amdE",
  authDomain: "carrentalsystem-39a7e.firebaseapp.com",
  projectId: "carrentalsystem-39a7e",
  storageBucket: "carrentalsystem-39a7e.appspot.com",
  messagingSenderId: "771145197703",
  appId: "1:771145197703:web:f951f702e077adebe6f022",
  measurementId: "G-SQGEZ58MGB",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
