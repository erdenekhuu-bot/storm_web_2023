import SearchBar from "../component/SearchBar"
import BodyBar from "../component/BodyBar"
import FooterBar from "../component/FooterBar"

export default function MainPage(){
    return (
        <div className="MainPage">
            <SearchBar/>
            <BodyBar/>
            <FooterBar/>
        </div>
    )
}