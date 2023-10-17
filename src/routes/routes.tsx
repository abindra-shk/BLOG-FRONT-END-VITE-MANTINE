import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from '../layouts/Dashboard.layout'
import {LandingLayout} from "../layouts/Landing.layout";



const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<LandingLayout />} />
            <Route path={'/dashboard'} element={<DashboardLayout />} />
            <Route path={'/dashboard/*'} element={<DashboardLayout />} />
        </Routes>

    )
}

export default MainRoute
