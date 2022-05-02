import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { firebaseApp } from '../../config/firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(firebaseApp);

export default function Home() {

    const onClick = () => {
        signOut(auth)
    }

    return (
        <div>
            <h1>Home</h1>
            <Button onClick={onClick}>cerrar sesion</Button>
        </div>
    )
}
