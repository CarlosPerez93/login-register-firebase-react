import firebaseApp from "./firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

export const onRegister = async (values) => {
  //create and register user with email and password
  const firestore = getFirestore(firebaseApp);
  const infoUser = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  ).then((userFirebase) => {
    return userFirebase;
  });
  console.log("registrado", infoUser.user.uid);
  console.log("registrado", infoUser);

  //send info a db
  const docuRef = doc(firestore, `Users/${infoUser.user.uid}`);
  setDoc(docuRef, { email: values.email });
};

export const signIn = (values) => {
  signInWithEmailAndPassword(auth, values.email, values.password);
};
