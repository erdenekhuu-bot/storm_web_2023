import LeftBar from "../component/LeftBar-component/LeftBar";
import RightBar from "../component/RightBar-component/RightBar";
import '../App.css'


const MainPage = function(){
    return (
        <div className="MainPage">
            <LeftBar/>
            <RightBar/>
        </div>
    )
}
export default MainPage;