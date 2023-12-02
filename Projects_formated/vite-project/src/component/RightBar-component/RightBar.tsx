import {Layer, Layer_final} from "./Layer";
import Footer from "./Footer";
function RightBar(){
    return (
        <div className="left-bar">
            <div className="search-row1">
                <div id="box-search">
                    <div id="external">
                        <input type="text" placeholder="Хайх"/>
                        <button id='enter'>⌕</button>
                    </div>
                    <div id="search-btn">
                        <button id="login">Бүртгүүлэх</button>
                        <button id="signin">Нэвтрэх</button>
                    </div>
                </div>
            </div>
                <Layer txt='LIFESTYLE'/>
                <Layer txt='TECHNOLOGY'/>
                <Layer txt="HEALTH"/>
                <Layer_final txt="Цаах унших"/>
           <Footer/>
        </div>
    )
}
export default RightBar;