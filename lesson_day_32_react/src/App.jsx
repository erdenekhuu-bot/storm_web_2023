import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import MessageComponent from './components/MessageComponents'

function App() {
  const shouldShowMessage=true;
  const txt='Hello World'

  return (
    <div className='App'>
        {/* <h1>Use State in ReactJS</h1>
        <header className='App-header'>
          <Counter/>
        </header> */}
        <h1>Welcome to the Conditional Rendering Demo</h1>
        <MessageComponent showMessage={txt}/>
    </div>
  )
}

export default App;
