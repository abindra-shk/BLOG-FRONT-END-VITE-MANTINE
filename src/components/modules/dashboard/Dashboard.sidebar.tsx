// import {useNavigate} from "react-router-dom";

export const DashboardSidebar = ()=>{
    // const navigate = useNavigate();
    const navItems = [
        {label: 'Home', path: '/Home'},
        {label: 'Explore', path: '/Explore'},
        {label: 'Properties', path: '/Properties'},
        {label: 'Realtors', path: '/Realtors'},
        {label: 'Featured', path: '/Featured'},
    ]
    return <nav className="py-sm px-sm w-[200px] mt-[50px]">
        <div className="nav-items">
            {navItems.map((v, key) => (
                <div className="nav-item px-md py-xs pointer rounded-sm hover:bg-gray-100" key={key}>{v.label}</div>
            ))}
        </div>
    </nav>
}