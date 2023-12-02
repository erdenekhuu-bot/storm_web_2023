import '../App.css'
import LeftBar from '../component/LeftBar-component/LeftBar'
import RightBar from '../component/RightBar-component/RightBar'
export default function MainPage(){
    return (
        <div className='main'>
            <LeftBar/>
            <RightBar/>
        </div>
    )
}