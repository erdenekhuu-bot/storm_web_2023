import './css/FooterBar.css'
import title from '../../assets/title_icon.png'
import mail from '../../assets/fi_mail.png'
import phone from '../../assets/fi_phone.png'

export default function FooterBar(){
    return (
    <div className="FooterBar">
        <div></div>
        <div>
            <img src={title} alt=""/>
            <span className='i'>i</span><span className='blog'>blog</span> <br />
            <span style={{color: '#4D5A66'}}>Write, Read, Enjoy</span>
        </div>
        <div>
            <p><b>Тусламж</b></p>
            <span>Хэрэглэх заавар</span> <br />
            <span>Санал хүсэлт</span>
        </div>
        <div>
            <p><b>Бидэнтэй холбогдох</b></p>
            <span><img src={mail} alt="" />info@jstemplate.net</span> <br />
            <span><img src={phone} alt="" />+976 99112344</span>
        </div>
        <div></div>
    </div>
    )
}