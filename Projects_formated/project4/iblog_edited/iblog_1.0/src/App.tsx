import './App.css'
import {MainPage, SecondPage, ThirdPage} from './page/MainPage'
// import MainPage from './page/MainPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {

  return (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/menu' element={<SecondPage/>}/>
                <Route path='/profile' element={<ThirdPage/>}/>
              </Routes>
            </BrowserRouter>
          </div>
  )
}
