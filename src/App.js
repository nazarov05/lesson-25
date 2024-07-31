import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import { Toggle } from "./components/toggle/Toggle";
import useLocalStorage from "use-local-storage";
function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className='App'data-theme={isDark ? "dark" : "light"}>
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    <Navbar/>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
      
      
      
    </div>
  );
}

export default App;
