import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header/header";
import { useTTS } from "../contexts/TTSContext";

const RootLayout = () => {
    const location = useLocation();
    const { stop } = useTTS();

    useEffect(() => {
        stop();
    }, [location.pathname]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout;