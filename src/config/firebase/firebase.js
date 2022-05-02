import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHN_vEUcah-tii7ham0LY2L8EFyB--bvM",
  authDomain: "proyectogrado-8a0e8.firebaseapp.com",
  projectId: "proyectogrado-8a0e8",
  storageBucket: "proyectogrado-8a0e8.appspot.com",
  messagingSenderId: "775415912341",
  appId: "1:775415912341:web:2039c6705c4e27c659489c",
  measurementId: "G-6GM3D24WZ5",
};

export const firebaseApp = initializeApp(firebaseConfig);

/*   apiKy: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementID: process.env.REACT_APP_MEASUREMENTID, */
