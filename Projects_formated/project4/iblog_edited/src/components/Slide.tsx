import title from '../assets/title_icon.png'
import '../App.css'
import frame from '../assets/Frame.png'
import { useState } from 'react'
import {Menu1, Menu2}from './Menu'

function SlideBar(){
    const [isOpen, setIsOpen]=useState(false);
    function trigger(){
        setIsOpen(!isOpen);
    }
    return (
        <div className="slide-bar">
            <div id='title'>
                <img src={title} alt="" /> <span className='i'>i</span><span className='blog'>blog</span> <p></p>
                    <div className='slide-box' onClick={trigger}>
                        <b>Lifestyle</b> <span><img src={frame} alt="" /></span>
                        {isOpen && <Menu1 txt1='Hobby' txt2='Travel' txt3='Food&Beverage' txt4='Home and decor'/>}
                    </div>

                    <div className='slide-box' onClick={trigger}>
                        <b>Sport</b> <span><img src={frame} alt="" /></span>
                        {/* {isOpen && <Menu2 txt1='Soccer' txt2='Volleyball'/>} */}
                    </div>

                    {/* <div className='slide-box'><b>Technology</b><span><img src={frame} alt="" /></span>
                    </div>
                    <div className='slide-box'><b>Entertainment</b><span><img src={frame} alt="" /></span>
                    </div> */}
            </div>
            
        </div>
    )
}
export default SlideBar;