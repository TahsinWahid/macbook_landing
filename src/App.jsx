import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  )
}

export default App
