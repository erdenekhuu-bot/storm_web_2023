import './MenuBar.css'
import title from '../../../assets/title_icon.png'
import frame from '../../../assets/Frame_Up.png'
import {Hobby, Sport, Technology, Entertainment} from '../SlideBar/SlideBar'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const MenuBar = function(){
    const [menu1, setMenu1]=useState(false)
    const [menu2, setMenu2]=useState(false)
    const [menu3, setMenu3]=useState(false)
    const [menu4, setMenu4]=useState(false)

    function trigger1(){
        setMenu1(!menu1)
    }
    function trigger2(){
        setMenu2(!menu2)
    }
    function trigger3(){
        setMenu3(!menu3)
    }
    function trigger4(){
        setMenu4(!menu4)
    }

    return (
        <div className='MenuBar'>
            <Link to='/'>
                <div style={{cursor: 'pointer'}}>
                    <img src={title} alt="" style={{cursor: 'pointer'}}/>
                    <span className='i'>i</span><span className='blog'>blog</span>
                </div>
            </Link>
           
            <div className='expanded'></div>
            <div className='slide' onClick={trigger1} style={{height: (menu1 ? 200 : 37)}}><b>Lifestyle</b> <span><img src={frame} alt="" /></span>
                {menu1 && <Hobby txt1='Hobby' txt2='Travel' txt3='Food&Beverage' txt4='Home and decor'/>}
            </div>
            <div className='slide' onClick={trigger2} style={{height: (menu2 ? 100 : 37)}}><b>Sport</b> <span><img src={frame} alt="" /></span>
                {menu2 ? <Sport txt1='Soccer' txt2='Volleyball'/> : null}
            </div>
            <div className='slide' onClick={trigger3} style={{height: (menu3 ? 150 : 37)}}><b>Technology</b> <span><img src={frame} alt="" /></span>
                {menu3 ? <Technology txt1='Artificial Intelligence' txt2='New&Computers' txt3='5G'/> : null}
            </div>
            <div className='slide' onClick={trigger4} style={{height: (menu4 ? 200 : 37)}}><b>Entertainment</b> <span><img src={frame} alt="" /></span>
                {menu4 ? <Entertainment txt1='KPOP&News' txt2='BTS' txt3='Black cat' txt4='Shock and News'/> : null}
            </div>
        </div>
    )
}
export default MenuBar;