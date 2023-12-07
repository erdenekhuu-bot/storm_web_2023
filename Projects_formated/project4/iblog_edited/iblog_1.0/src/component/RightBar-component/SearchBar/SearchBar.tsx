import './SearchBar.css'

const SearchBar = function(){
    return (
        <div className='layout-container'>
            <div className='SearchBar'>
                <div id='border'>
                    <input type="text" placeholder='Хайх...'/>
                    <button className='btn'><b>⌕</b></button>
                </div>
                <div id='space-btn'>
                    <button id='signUp'>Бүртгүүлэх</button>
                    <button id='signIn'>Нэвтрэх</button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar