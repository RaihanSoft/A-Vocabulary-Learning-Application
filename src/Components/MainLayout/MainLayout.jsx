import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <Navbar />

            {/* <div className="h-[calc(100vh-300px)]"> */}
                <Outlet />
            {/* </div> */}



            <Footer />

        </div>
    )
}

export default MainLayout
