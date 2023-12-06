import './css/BodyBar.css'
import Tracey from '../../assets/Tracey.png'
import pen from '../../assets/u_pen.png'
import notes from '../../assets/notes 1.png'
import wn_pen from '../../assets/wn_pen.png'

export default function SeondBodyBar(){
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
                    <div id='sub-column-1'>
                        <div>
                            <button id='btn'><img src={wn_pen} alt="" /><b>Пост нэмэх</b></button>
                        </div>
                        <p></p>
                        <div>
                            <b style={{fontSize: 18}}>Категори сонгох</b> <br />
                            <div id='category'><span>Lifestyle</span> <span></span></div>
                        </div>
                    </div>
                    <div id='sub-column-2'>
                        <div>
                          
                        </div>
                        <div></div>
                    </div>
                    
                </div>
        </div>
    )
    
}