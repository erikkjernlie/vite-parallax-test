import { useRef } from "react";
import Confetti from "react-confetti";
import niklasBaris from "./nikky.png";
import gif from "./niklas.gif";

function App() {
  const ref = useRef();

  return (
    <div
      style={{
        backgroundImage: `url(${niklasBaris})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          overflowX: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <Confetti></Confetti>
      </div>

      <div
        style={{
          bottom: 0,
          paddingBottom: "3vh",
          position: "absolute",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          flexDirection: "column",
        }}
      >
        <img
          src={gif}
          style={{
            width: "100vw",
          }}
        />
        <a
          href="https://www.tv2.no/v/1724513/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 25,
            paddingTop: "3vh",
          }}
        >
          Turist gir Northug spurt-sjokk @ 13. Februar 2022
        </a>
      </div>
    </div>
  );
}

export default App;

/*

     <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${niklasBaris})`,
            backgroundSize: "cover",
            width: "100%",
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: `url(${knerten})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundImage: `url(${gif})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        {
          <ParallaxLayer
            sticky={{ start: 0.9, end: 1.5 }}
            style={{ textAlign: "center", width: "100%" }}
          >
            <img
              src={gif}
              style={{
                width: "80vw",
              }}
            />
          </ParallaxLayer>
        }

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Niklas Hovland</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Grattis med dagen</h2>
        </ParallaxLayer>
      </Parallax>
*/
