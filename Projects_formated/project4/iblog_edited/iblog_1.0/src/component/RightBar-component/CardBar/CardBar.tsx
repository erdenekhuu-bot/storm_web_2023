import './css/CardBar.css'
import Category from './Category'

const CardBar = function(){
    return (
        <div className="CardBar">
            <div>
                <div className='card-btn'>
                    <button className="cbtn"><b>LIFESTYLE</b></button>
                    <button className="cbtn" style={{cursor: 'alias'}}>{''}</button>
                    <button className="cbtn" style={{color: '#546371'}}>Бүгд {'>'}</button>
                </div>
                <Category/>
                <div className='card-btn'>
                    <button className="cbtn"><b>TECHNOLOGY</b></button>
                    <button className="cbtn" style={{cursor: 'alias'}}>{''}</button>
                    <button className="cbtn" style={{color: '#546371'}}>Бүгд {'>'}</button>
                </div>
                <Category/>

                <div className='card-btn'>
                    <button className="cbtn"><b>HEALTH</b></button>
                    <button className="cbtn" style={{cursor: 'alias'}}>{''}</button>
                    <button className="cbtn" style={{color: '#546371'}}>Бүгд {'>'}</button>
                </div>
                <Category/>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', margin: '40px auto'}}>
                <button id='next-read'>Цааш унших</button>
            </div>      
            <div></div>
        </div>
    )
}
export default CardBar