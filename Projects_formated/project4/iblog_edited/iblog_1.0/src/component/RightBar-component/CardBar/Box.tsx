import img from '../../../assets/img.png'
import Image from '../../../assets/Image.png'
import heart from '../../../assets/heart.png'
import share from '../../../assets/share.png'


const Box = function(){


    return (
        <div>
            <img src={img} alt=""/> <br />
            <div style={{display: 'flex', backgroundColor: 'white', width: 210, fontSize: 18, fontFamily: 'sans-serif'}}>
                <b>The Impact of Technology on the Workplace</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'white'}}>
                <span style={{display: 'flex', fontSize: 14, color: '#97989F', alignItems: 'center'}}>
                    <img src={Image} alt="" />
                    Tracey Wilson
                </span>
                <span style={{fontSize: 14, color: '#97989F'}}>
                    Aug 20, 2022
                </span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',backgroundColor: 'white'}}>
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <img src={heart} alt="" />
                    <b>23</b>
                </span>
                <span>
                    <img src={share} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Box;