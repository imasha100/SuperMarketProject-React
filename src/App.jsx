import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";  
import HeroSection from './components/HeroSection'; 
import Feature from './components/Feature';
import Subscription from './components/Subscription';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Navbar/Header */}
      <Navbar />
      <HeroSection/>
      <Feature/>
      <Subscription/>
      <Footer/>
      

      
      
    </div>
  )
}

export default App
