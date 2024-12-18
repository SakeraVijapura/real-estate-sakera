import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
        </>
    );
};

export default Layout;