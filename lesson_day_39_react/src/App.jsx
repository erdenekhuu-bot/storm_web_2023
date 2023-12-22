import {Routes, Route} from 'react-router-dom'
import NavBar from './component/Navbar'
import Pages from './component/Pages'
import Login from './component/Login'
import Register from './component/Register'
import Contact from './component/Contact'

function App() {

  return (
    <>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Pages title={'Home'}/>}/>
          <Route path='/about' element={<Pages title={'About'}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
    </>
  )
}
export default App
