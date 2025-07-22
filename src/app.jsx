import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    // <div className='flex-center h-[100vh]'>
    //  <h1 className="text-3xl text-indigo-300">VEDANT</h1>
    // </div>
    
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
