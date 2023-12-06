import LeftBar from "../component/LeftBar-component/LeftBar";
import { RightBar, SecondRightBar, ThirdRightBar } from "../component/RightBar-component/RightBar";
// import  RightBar  from "../component/RightBar-component/RightBar";

const MainPage = function(){
    return (
        <div className="MainPage">
            <LeftBar/>
            <RightBar/>
        </div>
    )
}

const SecondPage = function(){
    return (
        <div className="MainPage">
            <LeftBar/>
            <SecondRightBar/>
        </div>
    )
}

const ThirdPage = function(){
    return (
        <div className="MainPage">
            <LeftBar/>
            <ThirdRightBar/>
        </div>
    )
}

export {MainPage, SecondPage, ThirdPage}
// export default MainPage