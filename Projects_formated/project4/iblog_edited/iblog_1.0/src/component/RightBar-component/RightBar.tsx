import SearchBar from "./SearchBar/SearchBar"
import CardBar from "./CardBar/CardBar"
import Footer from "./CardBar/Footer"
import SecondCardBar from './SecondCardBar/CardBar'
import ThirdCardBar from "./ThirdCardBar/CardBar"

const RightBar = function(){
    return (
        <div className="RightBar">
            <SearchBar/>
            <CardBar/>
            <Footer/>
        </div>
    )
}

const SecondRightBar = function(){
    return (
        <div className="RigthBar">
            <SearchBar/>
            <SecondCardBar/>
            <Footer/>
        </div>
    )
}

const ThirdRightBar = function(){
    return (
        <div className="RightBar">
            <SearchBar/>
            <ThirdCardBar/>
            <Footer/>
        </div>
    )
}
export {RightBar, SecondRightBar, ThirdRightBar}
// export default RightBar