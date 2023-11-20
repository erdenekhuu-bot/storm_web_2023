import React from 'react';
import '../App.css'



function subComp1() {
    return(
     <div>
         Нүүр хуудас
         Lifestyle
         Hobby
         Theme installation
     </div>
    )
 }
 function subComp2(){
    return (
        <div>
            
        </div>
    )
 }
function Main_window(){
     return (
        <main>
           <div className='layer-1'>
                <subComp1/>
           </div>
        </main>
     )
}
export default Main_window;