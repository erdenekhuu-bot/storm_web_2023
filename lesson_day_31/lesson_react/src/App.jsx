import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfilesComp'

function App() {
  const [count, setCount] = useState(0)

  return (
     <ProfileCard/>
  )
}

export default App
