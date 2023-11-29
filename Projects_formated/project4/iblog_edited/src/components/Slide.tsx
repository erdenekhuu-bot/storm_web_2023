import title from '../assets/title_icon.png'
import '../App.css'
import frame from '../assets/Frame.png'
import { Menu1, Menu2 } from './Menu'

var slide=document.getElementsByClassName('slide-box')

function SlideBar(){
    
    return (
        <div className="slide-bar">
            <div id='title'>
                <img src={title} alt="" /> <span className='i'>i</span><span className='blog'>blog</span> <p></p>
                    <div className='slide-box' onClick={function(){
                        slide[0].setAttribute('style','height: 250px')
                        }}>
                        <b>Lifestyle</b> <span><img src={frame} alt="" /></span>
                        <Menu1 txt1='Hobby' txt2='Travel' txt3='Food&Beverage' txt4='Home and decor'/>
                    </div>

                    <div className='slide-box' onClick={function(){
                        slide[1].setAttribute('style','height: 200px')
                    }}>
                        <b>Sport</b> <span><img src={frame} alt="" /></span>
                        <Menu2 txt1='Soccer' txt2='Volleyball'/>
                    </div>

                    <div className='slide-box' onClick={function(){
                        slide[2].setAttribute('style','height: 200px')
                        slide[2].addEventListener('mouseout',function(){
                            slide[2].setAttribute('style','height: 37px')
                        })
                    }}>
                        <b>Technology</b><span><img src={frame} alt="" /></span>
                        
                    </div>
                    <div className='slide-box' onClick={function(){
                        slide[3].setAttribute('style','height: 200px')
                        slide[3].addEventListener('mouseout',function(){
                            slide[3].setAttribute('style','height: 37px')
                        })
                    }}>
                        <b>Entertainment</b><span><img src={frame} alt="" /></span>
                    </div>
            </div>
            
        </div>
    )
}
export default SlideBar;