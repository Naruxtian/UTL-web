import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

  return (
    <div>
        <Particles
        id="tsParticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#003082",
            },
            position: "center",
            repeat: "repeat",
            size: "cover",
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                selectors: "#repulse-div",
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 10,
                  smooth: 10,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              grab: {
                distance: 400,
              },
              repulse: {
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
            },
          },
          particles: {
            color: {
              value: "#00B394",
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              enable: true,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              path: {},
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              spin: {},
            },
            number: {
              density: {
                enable: true,
              },
              value: 150,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 20,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default Background