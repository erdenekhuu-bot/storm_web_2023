import './css/SearchBar.css'
import title from '../assets/title_icon.png'
import heart from '../assets/u_heart.png'
import pen from '../assets/u_pen.png'
import profile from '../assets/u_user.png'
import logout from '../assets/fi_log-out.png'

import { useState } from 'react'

const SearchBar = function(){
    const [menu, setMenu]=useState(false)

    function trigger(){
        setMenu(true)
    }

    return (
        <div className='SearchBar'>
            <div>
                <img src={title} alt="" />
                <span className='i'>i</span><span className='blog'>blog</span>
            </div>
            <div id='border'>
                <input type="text" placeholder='Хайх...'/>
                <button className='btn'><b>⌕</b></button>
            </div>
            <div id='space-btn'>
                <img src={heart} alt="" />
                <button id='post'><span>Post</span> <span style={{margin: 5}}><img src={pen} alt="" /></span></button>
                <button id='profile' onClick={trigger}><span><img src={profile} alt="" /></span><span style={{margin: 5}}>Профайл</span></button>
                    {menu ? <div>
                                <div><img src={profile} alt="" /><b>Миний мэдээлэл</b></div>
                                <div><img src={heart} alt="" />Таалагдсан</div>
                                <div><img src={logout} alt="" />Гарах</div>
                            </div> : null}
            </div>
        </div>
    )
}

export default SearchBar