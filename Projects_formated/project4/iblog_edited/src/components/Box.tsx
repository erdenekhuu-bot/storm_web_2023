import img from '../assets/img.png'
import Image from '../assets/Image.png'
import share from '../assets/share.png'
import heart from '../assets/heart.png'
function Box(){
    return (
        <div className='box-container'>
            <div className='box'>
            <img src={img} alt='img...'/> <br />
            <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
            <div className='subrow'>
                <span>
                    <img src={Image} alt=''/>Tracey Wilson
                </span>
                <span className='post'>Aug 20, 2022</span>
            </div>

            <div className='subrow'>
                <span>
                <img src={heart} alt="" />23
                </span>
                <img src={share} alt="" />
            </div>
            </div>
        </div>
    )
}
export default Box;