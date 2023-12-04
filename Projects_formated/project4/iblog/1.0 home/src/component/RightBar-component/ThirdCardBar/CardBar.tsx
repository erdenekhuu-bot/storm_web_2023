import './css/CardBar.css'
import Category from './Category'

const CardBar = function(){
    return (
        <div className="CardBar">
            <div>
                <div className='card-btn'>
                    <button className="cbtn"><span>Нүүр хуудас</span> <span>{'>'}</span> <span>Lifestyle</span> <span>{'>'}</span> <span>Hobby</span> <span>{'>'}</span> <span>Theme Installation</span></button>
                    <button className="cbtn"></button>
                </div> <p></p>
                <Category/>
            </div>
             
            <div></div>
             
        </div>
    )
}
export default CardBar