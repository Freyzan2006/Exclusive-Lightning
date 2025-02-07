import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}

export default Layout