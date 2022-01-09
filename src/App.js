import React from 'react';
import './App.css';
import Navbar from './components/header/header.js';
import Particles from "react-tsparticles";
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js'


function App() {
return (
<>


 <Particles
            id="tsparticles"
            options={{
               background: {
                  color: {
                     value: 'transparent',
                  },
               },
               fpsLimit: 60,
              /* interactivity: {
                  detectsOn: "canvas",
                  events: {
                     onClick: {
                        enable: false,
                        mode: "push",
                     },
                     onHover: {
                        enable: true,
                        mode: "repulse",
                     },
                     resize: true,
                  },
                  modes: {
                    bubble: {
                       distance: 400,
                       duration: 2,
                       opacity: 0.8,
                       size: 40,
                   },
                   push: {
                      quantity: 4,
                   },
                   repulse: {
                      distance: 200,
                      duration: 0.4,
                   },
                },
             },*/
             particles: {
                color: {
                    value: ["#7fffd4", "#000"],
                },
                links: {
                   color: "#ffffff",
                   distance: 150,
                   enable: true,
                   opacity: 0,
                   width: 1,
                },
                collisions: {
                   enable: true,
                 },
                 move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false,
                 },
                 number: {
                    density: {
                       enable: true,
                       value_area: 800,
                    },
                    value: 300,
                 },
                 opacity: {
                    value: 1,
                 },
               
                  size: {
                     random: true,
                     value: 5,
                  },
               },
               detectRetina: true,
            }}
         />
          <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
        <Navbar />
        <Body/>
<Footer /> 
      </div>
    

</>
);
}

export default App;
