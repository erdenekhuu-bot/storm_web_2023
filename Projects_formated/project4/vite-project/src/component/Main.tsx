import icon from '../assets/icon.png'
import arrow from '../assets/arrow.png'
import '../App.css'
import img from '../assets/img.png'
import Image from '../assets/Image.png'
import heart from '../assets/heart.png'
import share from '../assets/share.png'
// interface SlideProps {
//     children?: ReactNode;
// }

function Slide(){

    return (
        <div className="slide-menu">
            <div className="iblog">
               <img src={icon} alt=''/>
                <span id='let'>i</span><span id='tter'>blog</span>
                <p></p>
                <div className="frame">
                    <span>Lifestyle</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame'>
                    <span>Sport</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame'>
                    <span>Technology</span><img src={arrow} alt='arrow'/>
                </div>
                <div className='frame'>
                    <span>Entertainment</span><img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}

function SearchBar(){
    return (
        <header className='search-bar'>
            <input type='text' placeholder='Хайх'/><span>🔎</span>
            <div>
                <button id='bt1'>Бүртгүүлэх</button>
                <button id='bt2'>Нэвтрэх</button>
            </div>
        </header>
    )
}
function LHead(){
    return (
        <div className='container'>
            <div className='lhead'>
                <button id='hbtn1'><b>LIFESTYLE</b></button>
                <button id='hbtn2'></button>
                <button id='hbtn3'>Бүгд →</button>
            </div>
            <div className="box-container">
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
            </div>
            <div className='lhead'>
                <button id='hbtn1'><b>TECHNOLOGY</b></button>
                <button id='hbtn2'></button>
                <button id='hbtn3'>Бүгд →</button>
            </div>
            <div className="box-container">
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
            </div>
            <div className='lhead'>
                <button id='hbtn1'><b>HEALTH</b></button>
                <button id='hbtn2'></button>
                <button id='hbtn3'>Бүгд →</button>
            </div>
            <div className="box-container">
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
                <div className='box'>
                    <img src={img} alt='img...'/> <br />
                    <b>The Impact of <br/>Technology on the <br /> Workplace</b> <br />
                    <div className='subrow'>
                        <span>
                            <img src={Image} alt=''/>Tracey Wilson
                        </span>
                        <span className='post'>Aug 20, 2022</span>
                    </div>

                    <div className='subrow'>
                        <span>
                            <img src={heart} alt="" />23
                        </span>
                        <img src={share} alt="" />
                    </div>
                </div>
            </div>
            
            <div className='lfinal'>
                <button><b>Цааш унших</b></button>
            </div>
        </div>
    )
}

export function LFoot(){
    return (
        <footer>
            <div className='final'>

            </div>
        </footer>
    )
}
export function Background(){
    return (
        <div className='background'>
            <Slide/>
            <SearchBar/>
            <LHead/>
            <LFoot/>
        </div>
    )
}