import { Outlet } from "react-router-dom";
import MainContent from "../MainContent";
import LeftBar from "./LeftBar-component/LeftBar";
import { RightBar } from "./RightBar-component/RightBar";
import SearchBar from "./RightBar-component/SearchBar/SearchBar";


const Layout = () => {
    return (
        <div>
            <LeftBar />
            <SearchBar/>
            <Outlet />
        </div>

    )
}

export default Layout;