import Box from "./Box"

export default function secondLayer(props: {txt1: string, sign: string, txt2: string, txt3: string}){
    return (
        <div className="search-row2">
            <div className='lhead'>
                <button id='hbtn4'>{props.txt1} {props.sign}</button>   {/* Нүүр хуудас > */}
                <button id='hbtn5'>{props.txt2} {props.sign}</button>   {/* Lifestyle > */}
                <button id='hbtn6'>{props.txt3}</button>   {/* Hobby */}
            </div>
            <div className="lhead-ct">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        </div>
    )
}
