import './css/Footer.css'
import title from '../../../assets/title_icon.png'
import mail from '../../../assets/fi_mail.png'
import phone from '../../../assets/fi_phone.png'

const Footer = function(){
    return (
        <div className='Footer'>
            <div className='ft'>
                <img src={title} alt="" />
                <span className='i'>i</span><span className='blog'>blog</span> <br />
                <span style={{color: '#4D5A66'}}>Write, Read, Enjoy</span>
            </div>
            <div className='ft'>
                <b>Тусламж</b> <p></p>
                Хэрэглэх заавар <br />
                Санал хүсэлт
            </div>
            <div className='ft'>
                <b>Бидэнтэй холбогдох</b> <p></p>
                <img src={mail} alt="" /> info@jstemplate.net <br />
                <img src={phone} alt="" /> +976 99112344
            </div>
        </div>
    )
}

export default Footer;