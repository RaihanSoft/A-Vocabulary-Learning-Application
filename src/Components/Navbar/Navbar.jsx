import logo from "../assets/logo.jpeg";
import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../Provider/Provider";

const Navbar = () => {
    const { user, handleLogOut } = useContext(Context);
    const [showWelcome, setShowWelcome] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (user && user.email) {
            setShowWelcome(true);
        }
    }, [user]);

    const links = (
        <div className="text-lg flex-col lg:flex-row flex items-center justify-center ml-14 font-medium space-y-2 lg:space-x-8 lg:space-y-0">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "bg-black text-white p-2 rounded-md" : "hover:underline"
                }
                to="/"
                onClick={() => setIsMenuOpen(false)}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "bg-black text-white p-2 rounded-md" : "hover:underline"
                }
                to="/startLearning"
                onClick={() => setIsMenuOpen(false)}
            >
                Start-Learning
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "bg-black text-white p-2 rounded-md" : "hover:underline"
                }
                to="/tutorials"
                onClick={() => setIsMenuOpen(false)}
            >
                Tutorials
            </NavLink>

            {user && user.email && (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-black text-white p-2 rounded-md" : "hover:underline"
                    }
                    to="/myProfile"
                    onClick={() => setIsMenuOpen(false)}
                >
                    My-Profile
                </NavLink>


            )}
            <NavLink
                className={({ isActive }) =>
                    isActive ? "bg-black text-white p-2 rounded-md" : "hover:underline"
                }
                to="/aboutUs"
                onClick={() => setIsMenuOpen(false)}
            >
                About-Us
            </NavLink>
        </div>


    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white bg-opacity-80 shadow-lg">
            {/* Welcome Message */}
            {showWelcome && user && user.email && (
                <div className="bg-gray-300 py-2 text-center">
                    <p className="text-sm font-semibold">
                        Welcome, {<span className="text-red-600" >{user.displayName}</span> || "User"} <span className="text-red-500" >!</span>
                    </p>
                </div>
            )}

            {/* Navbar */}
            <div className="w-11/12 mx-auto flex items-center justify-between py-2 ">
                {/* Logo */}
                <Link to={'/'}>
                    <div className="flex items-center animate__hinge ">
                        <img className="w-12 h-12 mr-2" src={logo} alt="Logo" />
                        <div>
                            <h2 className="text-red-500 font-bold text-xl">Lingo</h2>
                            <h2 className="text-blue-500 font-bold text-xl">Bingo</h2>
                        </div>
                    </div>
                </Link>

                {/* Links for larger screens */}
                <div className="hidden lg:flex flex-1 justify-start">{links}</div>

                <div className="flex items-center justify-center gap-4 " >
                    {/* User Section */}
                    <div className="flex items-center  space-x-4">
                        {user && user.email ? (
                            <div className="flex items-center space-x-4">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={user.photoURL}
                                    alt="User"
                                />
                                <button
                                    onClick={handleLogOut}
                                    className="px-4 py-2 bg-black text-white rounded-md"
                                >
                                    Log-Out
                                </button>
                            </div>
                        ) : (
                            <NavLink to="/login">
                                <button className="px-4 py-2 bg-black text-white rounded-md">
                                    Login
                                </button>
                            </NavLink>
                        )}
                    </div>

                    {/* Hamburger Menu */}
                    <div className="lg:hidden relative">
                        <button
                            className="text-black focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu for small screens */}
                        {isMenuOpen && (
                            <div className="  absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 p-4">
                                {links}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </header>



    );
};

export default Navbar;
