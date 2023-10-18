import { Logo } from '../common/Logo';
import {useEffect, useState} from "react";

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

    return (
        <nav className="flex w-full h-full items-center justify-between border-b border-black"
             style={{background: scrolled ? 'white' : '#FFC017'}}
            >
            <div className="flex items-center w-full m-28">
                <div className="flex-none ">
                    <Logo />
                </div>
                <div className="flex-auto flex items-center justify-end ml-4 space-x-4">
                    {navItems.map((v, key) => (
                        <a
                            href={v.path}
                            key={key}
                            className="text-gray-800 hover:underline"
                        >
                            {v.label}
                        </a>
                    ))}
                    <button className={`text-white hover:underline ${
                        scrolled ? 'bg-green-600' : 'bg-black'
                     } px-4 py-2 rounded-3xl`}>
                        Get Started
                    </button>
                </div>
            </div>

        </nav>
    );
};
