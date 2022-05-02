import { firebaseConfig } from "./config/firebase";
import * as firebase from "firebase";
import "firebase/firestore";

const bd = firebase.firestore(firebaseConfig);

export const getCollection = async (collection) => {
  const result = { statusResponse: false, data: null, error: null };
  try {
    const data = await bd.collection(collection).get();
    console.log(data);
  } catch (error) {
    result.error = error;
  }
  return result;
};
