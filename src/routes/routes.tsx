import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from '../layouts/Dashboard.layout'
import {LandingLayout} from "../layouts/Landing.layout";
import {BlogPage} from "../layouts/BlogPage.layout.tsx";



const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<LandingLayout />} />
            <Route path={'/blog-page/:blogId'} element={<BlogPage />} />
            <Route path={'/dashboard/*'} element={<DashboardLayout />} />
        </Routes>

    )
}

export default MainRoute;
