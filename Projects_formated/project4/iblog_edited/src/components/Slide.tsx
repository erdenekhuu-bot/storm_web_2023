import title from '../assets/title_icon.png'
import '../App.css'
import frame from '../assets/Frame.png'
import { useState } from 'react'

function SlideBar(){
    const [state, setState]=useState(0);
    
    return (
        <div className="slide-bar">
            <div id='title'>
                <img src={title} alt="" /> <span className='i'>i</span><span className='blog'>blog</span> <p></p>
                    <div className='slide-box' onClick={function(){
                        const result = state == 0 ? 1 : 0;
                        console.log(result)
                    }}><b>Lifestyle</b> <span><img src={frame} alt="" /></span>
                        <div className='sub-slide'>Hobby</div>
                        <div className='sub-slide'>Travel</div>
                        <div className='sub-slide'>Food&Beverage</div>
                        <div className='sub-slide'>Home and decor</div>
                    </div>

                    <div className='slide-box' onClick={function(){
                        const result = state == 0 ? 1 : 0;
                        console.log(result)
                    }}><b>Sport</b> <span><img src={frame} alt="" /></span>
                        <div className='sub-slide'>Soccer</div>
                        <div className='sub-slide'>Volleyball</div>
                    </div>

                    <div className='slide-box' onClick={function(){
                        const result = state == 0 ? 1 : 0;
                        console.log(result)
                    }}><b>Technology</b><span><img src={frame} alt="" /></span>
                    </div>
                    <div className='slide-box' onClick={function(){
                        const result = state == 0 ? 1: 0;
                        console.log(result)
                    }}><b>Entertainment</b><span><img src={frame} alt="" /></span>
                    </div>
            </div>
            
        </div>
    )
}
export default SlideBar;