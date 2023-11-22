import icon from '../assets/icon.png'
import arrow from '../assets/arrow.png'
import '../App.css'
import { useState } from 'react'

const [state, setState]=useState(0)

type value = {
    num: number
}


export default function Slide(){

    return (
        <div className="slide-menu">
            <div className="iblog">
               <img src={icon} alt=''/>
                <span id='let'>i</span><span id='tter'>blog</span>
                <p></p>
                <div className="frame" onClick={setClick}>
                    <span>Lifestyle</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame' onClick={setClick}>
                    <span>Sport</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame' onClick={setClick}>
                    <span>Technology</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame' onClick={setClick}>
                    <span>Entertainment</span><img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}