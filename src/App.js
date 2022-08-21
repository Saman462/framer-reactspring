import "./App.css";
import sky from "./BS.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import lampright from "./lampr.png";
import lamp2right from "./lamp2r.png";
import lampleft from "./lampleft.png";
import road from "./Road.png";
import first from "./fm.png";
import middle from "./MM.png";
import last from "./LM.png";
import sign from "./roadsign.png";
import clouds from "./Clouds.png";
function App() {
  const { scrollY } = useScroll();
  const scaleRoad = useTransform(scrollY, [0, 500], [1, 2]);
  return (
    <div>
      <Parallax
        pages={3}
        style={{
          overflow: "auto",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: { sky },
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.0000001}
          sticky={{ start: 0.05, end: 0.83 }}
        >
          <img id="last" src={last}></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.0000002}
          sticky={{ start: 0.047, end: 0.82 }}
        >
          <img src={middle} id="middle"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.045, end: 0.81 }}
        >
          <img src={first} id="first"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-10}
          sticky={{ start: 0.03, end: 0.9 }}
        >
          <img src={road} id="road"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.045, end: 0.92 }}
        >
          <img src={sign} id="sign"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.032, end: 0.91 }}
        >
          <img src={lampright} id="lampright"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.05, end: 0.95 }}
        >
          <img src={lamp2right} id="lamp2right"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={5} sticky={{ start: 0.06, end: 0.8 }}>
          <img src={clouds} id="clouds"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.04, end: 0.92 }}
        >
          <img src={lampleft} id="lampleft"></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default App;
