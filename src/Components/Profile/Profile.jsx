import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Provider/Provider";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const MyProfile = () => {
    const { user } = useContext(Context);
    const [darkMode, setDarkMode] = useState(true);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    if (!user) {
        return (
            <p className="text-center text-gray-500 animate__animated animate__flash mt-20">
                Loading Profile...
            </p>
        );
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`min-h-[650px] flex items-center justify-center p-8 transition-all duration-500 ${darkMode
                ? "bg-gradient-to-bl from-gray-800 via-indigo-900 to-black text-white"
                : "bg-gradient-to-bl from-white via-gray-200 to-gray-300 text-black"
                }`}
        >
            <div
                className="relative w-full max-w-4xl p-12 bg-gradient-to-r from-indigo-700 via-purple-800 to-blue-900 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-[0_35px_100px_rgba(0,0,0,0.8)]"
                data-aos="fade-up"
            >
                {/* Dark/Light Mode Toggle */}
                <div className="absolute top-4 right-4">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? "🌙" : "🌞"}
                    </button>
                </div>

                {/* Profile Header Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                    {/* Profile Image with Circular Border */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-1 flex items-center justify-center">
                            <div
                                className="w-full h-full rounded-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${user.photoURL || "https://via.placeholder.com/150"})`,
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left sm:ml-8">
                        <h2
                            className="text-4xl font-extrabold text-white animate__animated animate__fadeInDown"
                            data-aos="fade-left"
                        >
                            Welcome, {user.displayName || "User"}!
                        </h2>
                        <p
                            className="text-lg text-gray-200 mt-2 animate__animated animate__fadeInUp"
                            data-aos="fade-left"
                        >
                            You&apos;re one step closer to managing your profile with ease.
                        </p>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Name Section */}
                    <div
                        className="p-6 bg-gradient-to-r from-purple-800 to-blue-600 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center animate__animated animate__zoomIn"
                        data-aos="zoom-in"
                    >
                        {/* Icon Section */}
                        <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white mr-0 sm:mr-4 mb-4 sm:mb-0" />

                        {/* Text Section */}
                        <div className="text-left w-full">
                            <p className="text-sm sm:text-base text-gray-300">Display Name</p>
                            <h3
                                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mt-2 break-words"
                            >
                                {user.displayName || "N/A"}
                            </h3>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div
                        className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center animate__animated animate__zoomIn"
                        data-aos="zoom-in"
                    >
                        {/* Icon Section */}
                        <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white mr-0 sm:mr-4 mb-4 sm:mb-0" />

                        {/* Text Section */}
                        <div className="text-left w-full">
                            <p className="text-sm sm:text-base text-gray-300">Email</p>
                            <h3
                                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mt-2 break-words sm:break-normal"
                            >
                                {user.email || "N/A"}
                            </h3>
                        </div>
                    </div>

                </div>


                {/* Update Profile Button */}
                <div className="mt-12 text-center">
                    <Link
                        to="/update-profile"
                        className="inline-block px-10 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;