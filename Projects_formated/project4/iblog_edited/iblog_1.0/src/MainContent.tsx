import { Outlet } from "react-router-dom";
import CardBar from "./component/RightBar-component/CardBar/CardBar";

const MainContent = () => {
    return (
        <div>
            <CardBar />
            <Outlet />
        </div>
    )
}

export default MainContent;