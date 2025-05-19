
import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import About  from './pages/About';
import Excamples from './pages/Excamples';
import Contact from './pages/Contact';

function App() {

  return (
    <>

   <div className='pages'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/excamples'>Excamples</NavLink>
    <NavLink to='/contact'>Contact</NavLink>

   </div>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/excamples' element={<Excamples />} />
      <Route path='/contact' element={<Contact />} />
      
    </Routes>
    
    </>
  )
}

export default App
