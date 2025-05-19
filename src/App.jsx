
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
    <NavLink to='/router/'>Home</NavLink>
    <NavLink to='/router/about'>About</NavLink>
    <NavLink to='/router/excamples'>Excamples</NavLink>
    <NavLink to='/router/contact'>Contact</NavLink>

   </div>

    <Routes>
      <Route path='/router/' element={<Home />} />
      <Route path='/router/about' element={<About />} />
      <Route path='/router/excamples' element={<Excamples />} />
      <Route path='/router/contact' element={<Contact />} />
      
    </Routes>
    
    </>
  )
}

export default App
