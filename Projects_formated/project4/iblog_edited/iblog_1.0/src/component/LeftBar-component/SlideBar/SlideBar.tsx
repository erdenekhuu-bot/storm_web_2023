import './SlideBar.css'
import {Link} from 'react-router-dom'

const Hobby = function(props: {txt1: string, txt2: string, txt3: string, txt4: string}){
    return (
        <div className='box'>
            <div className='subcat'><Link to='/menu'>{props.txt1}</Link></div>
            <div className='subcat'><Link to='/menu'>{props.txt2}</Link></div>
            <div className='subcat'><Link to='/menu'>{props.txt3}</Link></div>
            <div className='subcat'><Link to='/menu'>{props.txt4}</Link></div>
        </div>
    )
}
const Sport = function(props:{txt1: string, txt2: string}){
    return (
        <div className='box'>
            <div className='subcat'><Link to='/menu'>{props.txt1}</Link></div>
            <div className='subcat'><Link to='/menu'>{props.txt2}</Link></div>
        </div>
    )
}

const Technology = function(props:{txt1: string, txt2: string, txt3: string}){
    return (
        <div className='box'>
            <div className='subcat'>{props.txt1}</div>
            <div className='subcat'>{props.txt2}</div>
            <div className='subcat'>{props.txt3}</div>
        </div>
    )
}
const Entertainment = function(props:{txt1: string, txt2: string, txt3: string, txt4: string}){
    return (
        <div className='box'>
            <div className='subcat'>{props.txt1}</div>
            <div className='subcat'>{props.txt2}</div>
            <div className='subcat'>{props.txt3}</div>
            <div className='subcat'>{props.txt4}</div>
        </div>
    )
}
export {Hobby, Sport, Technology, Entertainment};