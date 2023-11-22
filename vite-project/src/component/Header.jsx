// Header.js
import React from 'react';
import '../App.css'
import logo from '../assets/Group.png'
function Header() {

    return (
        <header className='head'>
            <span className='head-logo'>
                <img src={logo} alt='iblog'/><span id='logo-txt'><b id='sub-logo'>i</b>Blog</span>
            </span>
            <input type='text' placeholder='Хайх'/>
            {/* <button id='searchbtn'>⌕</button> */}
            <span>
                <button id='sign-up'>Бүртгүүлэх</button>
                <button id='sign-in'>Нэвтрэх</button>
            </span>
           
        </header>
    );
}

export default Header;