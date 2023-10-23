import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from '../layouts/Dashboard.layout'
import {LandingLayout} from "../layouts/Landing.layout";
import { SignupScreen } from '../pages/auth/Signup.screen';



const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<LandingLayout />} />
            <Route path={'/dashboard'} element={<DashboardLayout />} />
            <Route path={'/dashboard/*'} element={<DashboardLayout />} />
            <Route path={'/signup'} element={<SignupScreen/>}/>
        </Routes>

    )
}

export default MainRoute
