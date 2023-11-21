import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sliding from './component/Slide-bar'
import Header from './component/Header'
import Main_window from './component/Main_Window'

 function Main(){
  return (
    <div>
      <Header/>
      <Main_window/>
    </div>
  )
}
export default Main;
