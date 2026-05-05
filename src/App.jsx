import { useRef, useEffect, useState, useMemo, useId } from 'react';
import './App.css'
import ColorBends from './components/ColorBends/ColorBends.jsx'
import Lanyard from './components/Lanyard/Lanyard.jsx'
import VariableProximity from './components/VariableProximity/VariableProximity.jsx';
import TextType from './components/TextType/TextType.jsx';
import CardSwap, { Card } from './components/CardSwap/CardSwap.jsx';
import CurvedLoop from './components/CurvedLoop/CurvedLoop.jsx';

function App() {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null);
  return (
    <div style={{width: '100vw', display: 'flex'}}>
      <ColorBends
        colors={["#ff0000ff", "#15ff00ff", "#2f00ffff"]}
        rotation={-11}
        speed={0.1}
        scale={1}
        frequency={1}
        warpStrength={0.93}
        mouseInfluence={0.2}
        autoRotate = {1}
        parallax={0.5}
        noise={0.1}
        transparent
      />
      <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
      <div style={{width: '100vw'}}>
        <div className='colorbends-container'> 
          <div
            ref={containerRef}
            className='hero-text-wrapper'
            >
            <div className='glass'>
              <h1 className='hello'>Hello there!</h1>
              <TextType 
                text={["Fellow Designers", "HR Team", "Future Employer", "Average Matcha Drinker", "Tech Enthusiast", "UI/UX Aficionado", "Random Person"]}
                typingSpeed={75}
                pauseDuration={2500}
                showCursor={true}
                cursorCharacter="_"
              />
              <h1 className='hello'> , I'm a</h1>
            </div>

            <VariableProximity
              label={'UIUX Designer'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={500}
              falloff='linear'
            />
            <div style={{marginTop: '50vh'}}>
              <video 
              src="src/assets/Scroll Down.webm"
              width="50"
              height="50"
              autoPlay
              loop
              muted
              playsInline
              style={{ borderRadius: "12px" }}
              />
            </div>

          </div>
        </div>
      </div>
      <div className='column2'>
      </div>
      <div style={{backgroundColor: '#002225'}}>
        {/* <CurvedLoop 
          marqueeText="See ✦ My ✦ Works ✦"
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="curved-loop-custom"
        /> */}
      </div>

    </div>

  )
}

export default App