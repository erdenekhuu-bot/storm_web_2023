import './App.css'
import MainContent from './MainContent'
import Layout from './component/Layout'
import { MainPage, SecondPage, ThirdPage } from './page/MainPage'
// import MainPage from './page/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<MainContent />} />
          <Route path='/menu' element={<SecondPage />} />
          <Route path='/profile' element={<ThirdPage />} />
        </Route>

      </Routes>
    </div>

  )
}
