import { Logo } from '../common/Logo';
import {useEffect, useState} from "react";
import { SignupForm } from '../modules/Landing/signupform';
import { LoginForm } from '../modules/Landing/loginform';


export const LandingNav = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navItems = [
        { label: 'Home', path: '/Home' },
        { label: 'Write', path: '/Write' },
        { label: 'Sign In', path: '/SignIn' },
    ];

    const [isLoginVisible, setIsLoginVisible]= useState(false);
    const [isSignupVisible, setIsSignupVisible] = useState(false);
    const [isSwitched, setIsSwitched]= useState(false);
    const SignupHandler=()=>{
        setIsSignupVisible(true);
    }
    const LoginHandler=()=>{
        setIsLoginVisible(true);
    }
    const SwitchHandler=()=>{
        setIsSwitched(true);
    }

    return (
        <>
       <nav className="flex w-full h-full items-center justify-between border-b border-black"
             style={{background: scrolled ? 'white' : '#FFC017'}}


            >
            <div className="flex items-center w-full m-28">
                <div className="flex-none ">
                    <Logo />
                </div>
                <div className="flex-auto flex items-center justify-end ml-4 space-x-4">
                    {navItems.map((v, key) => (
                        v.label==="Sign In"?(<a
                            onClick={LoginHandler}
                            key={key}
                            className="text-gray-800 cursor-pointer"
                        >
                            {v.label}
                        </a>):(<a
                            href={v.path}
                            key={key}
                            className="text-gray-800 cursor-pointer"
                        >{v.label}</a>)
                    ))}

                    <button className={`text-white cursor-pointer ${
                        scrolled ? 'bg-green-600' : 'bg-black'
                     } px-4 py-2 rounded-3xl`} onClick={SignupHandler}>
                      Get Started
                    </button>
                </div>
            </div>
        </nav>
        <SignupForm open={isSignupVisible} close={()=>{setIsSignupVisible(false);setIsSwitched(false)}} login={LoginHandler} isSwitched={isSwitched} switch={SwitchHandler}/>
        <LoginForm open={isLoginVisible} close={()=>{setIsLoginVisible(false);setIsSwitched(false)}} signup={SignupHandler} isSwitched={isSwitched} switch={SwitchHandler}/>
    </>
    );
};
