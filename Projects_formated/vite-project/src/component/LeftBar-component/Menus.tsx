export function Menu1(arg:{txt1:string, txt2:string, txt3:string, txt4:string}){
    return (
        <div>
            <div className='sub-slide'>{arg.txt1}
            
            </div>
            <div className='sub-slide'>{arg.txt2}</div>
            <div className='sub-slide'>{arg.txt3}</div>
            <div className='sub-slide'>{arg.txt4}</div>
        </div>
    )
}
export function Menu2(arg:{txt1:string, txt2:string}){
    return(
    <div>
            <div className='sub-slide'>{arg.txt1}</div>
            <div className='sub-slide'>{arg.txt2}</div>
    </div>
            
    )
}
