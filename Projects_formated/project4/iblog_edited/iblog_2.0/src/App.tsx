import './App.css'
import MainPage from './page/MainPage'
import SecondMainPage from './page/SecondPage'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SecondMainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
