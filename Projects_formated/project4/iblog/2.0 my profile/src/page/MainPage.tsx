import '../App.css'
import SearchBar from '../component/SearchBar'
import BodyBar from '../component/BodyBar'
import FooterBar from '../component/FooterBar'

const MainPage = function(){
    return (
        <div className='MainPage'>
            <SearchBar/>
            <BodyBar/>
            <FooterBar/>
        </div>
    )
}

export default MainPage