import title from '../assets/title_icon.png'
import '../App.css'
function SlideBar(){
  

    return (
        <div className="slide-bar">
            <div id='title'>
                <img src={title} alt="" /> <span id='i'>i</span><span id='blog'>blog</span> <p></p>
                    <div className='slide-box'><b>Lifestyle</b> <p></p> <p></p>
                        <div className='sub-slide'>Hobby</div>
                        <div className='sub-slide'>Travel</div>
                        <div className='sub-slide'>Food&Beverage</div>
                        <div className='sub-slide'>Home and decor</div>
                    </div>
                    <div className='slide-box'><b>Sport</b> <p></p> <p></p>
                        <div className='sub-slide'>Soccer</div>
                        <div className='sub-slide'>Volleyball</div>
                    </div>
                    <div className='slide-box'><b>Technology</b></div>
                    <div className='slide-box'><b>Entertainment</b></div>
            </div>
            
        </div>
    )
}
export default SlideBar;