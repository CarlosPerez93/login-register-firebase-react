import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading } from '../../../components/loading/Loading'
import { Login } from '../../login/Login'
import { Register } from '../../register/Register'
// const Login = lazy(() => import('../../login/Login'))
// const Register = lazy(() => import('../../register/Register'))

export const Public = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading className="spin" />}>
                <Routes >
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    )
}
