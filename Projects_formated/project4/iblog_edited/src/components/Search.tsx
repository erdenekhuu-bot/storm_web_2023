import Box from "./Box";
function Search(){
    return (
        <div className="left-bar">
            <div id="search-row1">
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
            
            <div id="search-row2">
                <div className='lhead'>
                    <button id='hbtn1'><b>LIFESTYLE</b></button>
                    <button id='hbtn2'></button>
                    <button id='hbtn3'>Бүгд →</button>
                    <Box/>
                </div>
            </div>
        </div>
    )
}
export default Search;