import Box from "./Box"

export  function Layer(props: {txt: string}){
    return (
        <div className="search-row2">
            <div className='lhead'>
                <button id='hbtn1'><b>{props.txt}</b></button>
                <button id='hbtn2'></button>
                <button id='hbtn3'>Бүгд →</button>
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

export function Layer_final(props: {txt: string}){
    return (
        <div className='lfinal'>
            <button><b>{props.txt}</b></button>
        </div>
    )
}