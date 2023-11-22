import icon from '../assets/icon.png'
import arrow from '../assets/arrow.png'


function SlideMenu(){
    return (
        <div className="slide-menu">
            <div className="menu">
               <img src={icon} alt='menu'/>
               <span id='iblog'><span className={css.letter}>i</span>blog</span>
            </div>
            <p></p>
            <span className='menu-1'>Lifestyle <img src={arrow} alt='menu-1'/></span> <p></p>
            <span className='menu-1'>Sport <img src={arrow} alt='menu-1'/></span>
        </div>
        
    )
}
export default SlideMenu;