import Tracy from '../../../assets/Tracey.png'
import LineFirst from './LineFirst'
import LineSecond from './LineSecond'

const Box = function(props: {txt1: string}){
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between',fontSize: 18, width: 310, height: 60}}>
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <img src={Tracy} alt="" /><b>{props.txt1}</b>
                </span>
                <span style={{display: 'flex', alignItems: 'center', color: '#2F80ED'}}>
                    <b>Follow</b>
                </span>
            </div>
            <p></p>
            <LineFirst/>
            <p></p>
            <LineSecond/>
        </div>
    )
}

export default Box;