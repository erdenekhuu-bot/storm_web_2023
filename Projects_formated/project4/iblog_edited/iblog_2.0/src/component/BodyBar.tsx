import './css/BodyBar.css'
import Tracey from '../assets/Tracey.png'
import pen from '../assets/u_pen.png'
import notes from '../assets/notes 1.png'


export default function BodyBar(){


    return(
        <div className="BodyBar">
                <div id='column-1'>
                    <div style={{width: 294, display: 'flex', alignItems: 'center'}}>
                       <img src={Tracey} alt="" /> <span style={{margin: 5, fontSize: 24, fontFamily: 'sans-serif'}}><b>Tracey Willson</b></span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', margin: 10}}>
                        <div style={{width: 50, textAlign: 'center', fontFamily: 'sans-serif'}}><b>1</b> <b>Follows</b></div>
                        <div style={{width: 70, textAlign: 'center', fontFamily: 'sans-serif'}}><b>0</b> <b>Followers</b></div>
                        <div style={{width: 50, textAlign: 'center', fontFamily: 'sans-serif'}}><b>0</b> <b>Posts</b></div>
                    </div>
                    <button style={{width: 270, textAlign: 'center', padding: 5, borderColor: '#E2E8EE', border: 'none', display: 'flex', justifyContent: 'center'}}><img src={pen} alt="" style={{color: 'black'}}/>Профайл засах</button>
                </div>
                <div id='column-2'>
                    <div>
                        <button id='btn'><b>Бүгд</b></button>
                    </div>
                    <div id='sub-column-2'>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{textAlign: 'center'}}>
                                <img src={notes} alt="" /> <br />
                                <span style={{fontSize: 16}}>Одоогоор бичвэр оруулаагүй <br /> байна!</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    
                </div>
        </div>
    )
    
}