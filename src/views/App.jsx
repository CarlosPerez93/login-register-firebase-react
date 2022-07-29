
import React, { useState, useEffect } from 'react'
import { Public } from './layout/public/Public';
import { Private } from './layout/private/Private';
import firebaseApp from '../config/firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(firebaseApp)

function App() {
  const [user, setUser] = useState(auth.currentUser);

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {

      if (user) {
        setUser({ user })

      } else {
        setUser({ user: null })
      }
    })
  }

  useEffect(() => {
    console.log("porfin!", auth.currentUser);
    authListener()
  }, [])








  return (

    <div className='app'>
      {auth.currentUser ? (<Private />) : (<Public />)}
    </div>
  );
}

export default App


