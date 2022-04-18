import { useRef } from "react";
import moon from "./niklas.png";
import land from "./land.png";
import cat from "./niklas.gif";
import Confetti from "react-confetti";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
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

      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "contain",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center", width: "100%" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Niklas Hovland</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Grattis med dagen</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
