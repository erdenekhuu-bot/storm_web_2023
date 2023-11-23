import { Children } from 'react'
import {ReactNode} from 'react'
import './App.css'
import {Slide, SearchBar, Background} from './component/Main'

interface createElement {
  children?: ReactNode;
}


function App() {

  return (
    <div>
     <Background/>
    </div>
  )
}

export default App
