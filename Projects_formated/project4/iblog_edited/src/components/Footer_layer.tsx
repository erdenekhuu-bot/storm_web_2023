import title from '../assets/title_icon.png'
import msg from '../assets/fi_mail.png';
import phone from '../assets/fi_phone.png';
export default function Footer(){
    return (
        <div id="search-row3">
            <div id="super_col1">
                <img src={title} alt="" /> <span className='i'>i</span><span className='blog'>blog</span> <br />
                <span id='fcs'>Write, Read, Enjoy</span>
            </div>
            <div id="super_col2">
                <b className='hcs'>Тусламж</b>
                <p className='lcs'>Хэрэглэх заавар</p>
                <p className='lcs'>Санал хүсэлт</p>
            </div>
            <div id="super_col3">
               <b className='hcs'>Бидэнтэй холбогдох</b>
               <p className='lcs'><img src={msg} alt="" /> info@jstemplate.net</p> 
               <p className='lcs'><img src={phone} alt="" /> +976 99112344</p> 
            </div>
        </div>
    )
}