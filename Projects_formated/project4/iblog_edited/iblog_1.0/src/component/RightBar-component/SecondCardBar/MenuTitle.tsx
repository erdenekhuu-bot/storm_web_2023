import './css/MenuTitle.css'

const MenuTitle = function(props: {txt: string}){
    return (
        <div>
            <button className="MenuTitle"><b>{props.txt}</b></button>
        </div>
    )
}

export default MenuTitle