import SearchBar from "../component/SecondBar/SearchBar"
import SecondBodyBar from "../component/SecondBar/SecondBodyBar"
import FooterBar from "../component/SecondBar/FooterBar"

export default function SecondMainPage(){
    return (
        <div className="MainPage">
            <SearchBar/>
            <SecondBodyBar/>
            <FooterBar/>
        </div>
    )
}