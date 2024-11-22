// import Home from '../Components/Home/Home';
// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from '../Components/MainLayout/MainLayout';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import StartLearning from '../Components/StartLearning/StartLearning';
// import Tutorials from '../Components/Tutorials/Tutorials';
// import AboutUs from '../Components/AboutUs/AboutUs';
// import Profile from '../Components/Profile/Profile';
// import Lesson from '../Components/Lessons/Lessons';
// import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
// import UpdateProfile from '../Components/UpdateProfile/UpdateProfile ';
// import ErrorPage from '../Components/Error/ErrorPage';

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />
//             },
//             {
//                 path: '/startLearning',
//                 element: <StartLearning />
//             },
//             {
//                 path: '/tutorials',
//                 element: <PrivateRoute> <Tutorials /> </PrivateRoute>
//             },
//             {
//                 path: '/aboutUs',
//                 element: <AboutUs />
//             },
//             {
//                 path: '/myProfile',
//                 element: <PrivateRoute> <Profile />  </PrivateRoute>
//             },
//             {
//                 path: "/update-profile",
//                 element: <UpdateProfile />

//             },
//             {
//                 path: '/login',
//                 element: <Login />
//             },
//             {
//                 path: "/forgot-password",
//                 element: <ForgotPassword />

//             },

//             {
//                 path: '/register',
//                 element: <Register />
//             },
//             {
//                 path: "/lessons/:lesson_no", 
//                 element: <PrivateRoute> <Lesson /> </PrivateRoute>,
//                 loader: async ({ params }) => {
//                     const response = await fetch('/spanish_vocabulary.json');
//                     const data = await response.json();

//                     const lessonVocabularies = data.filter(vocab => vocab.lesson_no === parseInt(params.lesson_no));

//                     return { lessonVocabularies };   
//                 },
//             },
//         ]

//     },
//     {
//         path: "*",
//         element: <ErrorPage />

//     },
// ]);


import Home from '../Components/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Components/MainLayout/MainLayout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import StartLearning from '../Components/StartLearning/StartLearning';
import Tutorials from '../Components/Tutorials/Tutorials';
import AboutUs from '../Components/AboutUs/AboutUs';
import Profile from '../Components/Profile/Profile';
import Lesson from '../Components/Lessons/Lessons';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile ';
import ErrorPage from '../Components/Error/ErrorPage';
import { Helmet } from 'react-helmet-async';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout />
        ),
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Spanish Learning Platform - Home</title>
                            <meta name="description" content="Welcome to the Spanish Learning Platform. Start your language learning journey today." />
                        </Helmet>
                        <Home />
                    </>
                )
            },
            {
                path: '/startLearning',
                element: (
                    <>
                        <Helmet>
                            <title>Start Learning Spanish</title>
                            <meta name="description" content="Begin your Spanish learning journey with engaging lessons and resources." />
                        </Helmet>
                        <StartLearning />
                    </>
                )
            },
            {
                path: '/tutorials',
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Spanish Tutorials - Learn Spanish</title>
                            <meta name="description" content="Explore various tutorials designed to help you master Spanish." />
                        </Helmet>
                        <Tutorials />
                    </PrivateRoute>
                )
            },
            {
                path: '/aboutUs',
                element: (
                    <>
                        <Helmet>
                            <title>About Us - Spanish Learning Platform</title>
                            <meta name="description" content="Learn more about our mission to help you learn Spanish effectively." />
                        </Helmet>
                        <AboutUs />
                    </>
                )
            },
            {
                path: '/myProfile',
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Your Profile - Spanish Learning</title>
                            <meta name="description" content="Manage your profile and track your Spanish learning progress." />
                        </Helmet>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Update Your Profile</title>
                            <meta name="description" content="Edit your personal details and learning preferences." />
                        </Helmet>
                        <UpdateProfile />
                    </>
                )
            },
            {
                path: '/login',
                element: (
                    <>
                        <Helmet>
                            <title>Login to Your Spanish Learning Account</title>
                            <meta name="description" content="Log in to access your personalized Spanish learning content." />
                        </Helmet>
                        <Login />
                    </>
                )
            },
            {
                path: "/forgot-password",
                element: (
                    <>
                        <Helmet>
                            <title>Forgot Password - Spanish Learning Platform</title>
                            <meta name="description" content="Recover your password to regain access to your account and continue learning Spanish." />
                        </Helmet>
                        <ForgotPassword />
                    </>
                )
            },
            {
                path: '/register',
                element: (
                    <>
                        <Helmet>
                            <title>Register for Spanish Learning</title>
                            <meta name="description" content="Create an account and start learning Spanish with our platform." />
                        </Helmet>
                        <Register />
                    </>
                )
            },
            {
                path: "/lessons/:lesson_no",
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Lesson - Learn Spanish</title>
                            <meta name="description" content={`Dive into Lesson  and learn new Spanish vocabulary and phrases.`} />
                        </Helmet>
                        <Lesson />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    const response = await fetch('/spanish_vocabulary.json');
                    const data = await response.json();

                    const lessonVocabularies = data.filter(vocab => vocab.lesson_no === parseInt(params.lesson_no));

                    return { lessonVocabularies };
                },
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },
]);
