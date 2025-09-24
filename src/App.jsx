import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";  
import HeroSection from './components/HeroSection'; 
import Categories from './components/Categories';
import Feature from'./components/Feature';
import Card from './components/Card';
import MobilePhone from './components/MobilePhone';
import LatestNews from './components/LatestNews';
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
      <Categories/>
      <Card/>
      <MobilePhone/>
      <LatestNews/>
      <Subscription/>
      <Footer/>
      
      

      
      
    </div>
  )
}

export default App
