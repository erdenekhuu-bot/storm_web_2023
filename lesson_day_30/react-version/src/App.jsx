
import './App.css'
import {Container, Footer, Header,Nav} from './component/container.jsx'
import Navbar from './component/Navbar.jsx'


function DropDownMenu(){
       return (
        <div>
          <Navbar/>
        </div>
       )
}


function App() {

  return (
    <div>
      <Header/>
      <Nav/>
      <div className="container">
      <Container/>
      </div>
      <Footer/>
    </div>
  )
}
export  {App, DropDownMenu} 
