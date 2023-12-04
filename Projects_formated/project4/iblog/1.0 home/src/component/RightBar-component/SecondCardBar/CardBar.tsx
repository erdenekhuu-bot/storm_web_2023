import './css/CardBar.css'
import Category from './Category'
import MenuTitle from './MenuTitle'

const CardBar = function(){
    return (
        <div className="CardBar">
            <div>
                <div className='card-btn'>
                    <button className="cbtn"><span>Нүүр хуудас</span> <span>{'>'}</span> <span>Lifestyle</span> <span>{'>'}</span> <span>Hobby</span></button>
                    <button className="cbtn"></button>
                </div>
                <MenuTitle txt='Hobby'/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
             
            <div style={{display: 'flex', justifyContent: 'center', margin: '40px auto'}}>
                <button id='next-read'>Цааш унших</button>
            </div>      
            
        </div>
    )
}
export default CardBar