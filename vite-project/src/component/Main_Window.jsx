import React from 'react';
import '../App.css'

function Layer1(props){
   return (
      <div>
        Нүүр хуудас >
        Lifestyle >
        Hobby >
        Theme Installation 
      </div>
   )
}



function Main_window(){
   return (
      <main>
         <div className='layer-1'>
            <Layer1/>
         </div>
      </main>
   )
}
export default Main_window;