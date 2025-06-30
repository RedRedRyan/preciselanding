import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import gsap from 'gsap';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from "./components/Contact.jsx";
import Waves from "./blueprint/Waves.jsx";




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Art />
      <Menu />
        <Contact />
        <Waves

            lineColor="#fff"

            backgroundColor="rgba(255, 255, 255, 0.2)"

            waveSpeedX={0.02}

            waveSpeedY={0.01}

            waveAmpX={40}

            waveAmpY={20}

            friction={0.9}

            tension={0.01}

            maxCursorMove={120}

            xGap={12}

            yGap={36}

        />

    </main>
  )
}

export default App
