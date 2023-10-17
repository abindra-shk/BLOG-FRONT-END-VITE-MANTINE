export const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="flex space-x-6">
                    <a href="#" className="text-lg">
                        Home
                    </a>
                    <a href="#">Services</a>
                    <a href="#">Pricing</a>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>
                    <div>
                        <button className="rounded-none ...">
                            Get Started!
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
