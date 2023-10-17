// import { successNotification } from "../../utils/helpers/notifications";
import bloglogo from "../../assets/bloglogo.png";

export const Logo = () => {
    // const showNotifications = () => {
    //     successNotification({
    //         title: 'Hahaha',
    //         message: 'hehehehe',
    //     });
    // };

    return (
        <div className="h-10 items-center cursor-pointer text-2xl" >
            <img
                src={bloglogo}
                alt="Blog Logo"
                className="h-full object-contain w-full"
            />
        </div>
    );
};
