import './css/SearchBar.css'
import title from '../assets/title_icon.png'
import heart from '../assets/heart.png'
import pen from '../assets/w_pen.png'
import user from '../assets/u_user.png'
import u_user from '../assets/u_user.png'
import u_heart from '../assets/u_heart.png'
import log_out from '../assets/fi_log-out.png'
import { useState } from 'react'

export default function SearchBar(){

    const [state, setState] = useState(false)

    function trigger(){
        setState(!state)
    }

    return (
        <div className="SearchBar">
            <div style={{cursor: 'pointer'}}>
                <img src={title} alt="" style={{cursor: 'pointer'}}/>
                <span className='i'>i</span><span className='blog'>blog</span>
            </div>
            <div id='border'>
                <input type="text" placeholder='Хайх...'/>
                <button className='btn'><b>⌕</b></button>
            </div>
            <div style={{fontSize: 15, display: 'flex', alignItems: 'center'}}>
                <img src={heart} alt=""/>
                <button id='post' onClick={trigger}>Post<img src={pen} alt="" />
                    <div id='menu'>
                                <div className='domain'><img src={u_user} alt="" /><b>Миний мэдээлэл</b></div>
                                <div className='domain'><img src={u_heart} alt="" />Таалагдсан</div>
                                <div className='domain'><img src={log_out} alt="" />Гарах</div>
                    </div>
                </button>
                <button id='profile'><img src={user} alt="" />Профайл</button>
                          
            </div>
            
        </div>
    )
}