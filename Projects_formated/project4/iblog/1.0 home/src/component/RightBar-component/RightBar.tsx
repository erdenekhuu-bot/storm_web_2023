import SearchBar from "./SearchBar/SearchBar"
// import CardBar from "./SecondCardBar/CardBar"
import CardBar from "./CardBar/CardBar"
// import CardBar from "./ThirdCardBar/CardBar"
import Footer from "./CardBar/Footer"

const RightBar = function(){
    return (
        <div className="RightBar">
            <SearchBar/>
            <CardBar/>
            <Footer/>
        </div>

    )
}

export default RightBar