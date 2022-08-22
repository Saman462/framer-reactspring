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
        pages={8}
        style={{
          overflow: "auto",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: { sky },
        }}
      >
        <ParallaxLayer offset={0} speed={1} sticky={{ start: 0.28, end: 0.83 }}>
          <img id="last" src={last}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2} sticky={{ start: 0.26, end: 0.82 }}>
          <img src={middle} id="middle"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3} sticky={{ start: 0.25, end: 0.88 }}>
          <img src={first} id="first"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-10}
          factor={0.4}
          sticky={{ start: 0.3, end: 0.9 }}
        >
          <img src={road} id="road"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.35, end: 0.92 }}
        >
          <img src={sign} id="sign"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.31, end: 0.91 }}
        >
          <img src={lampright} id="lampright"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.35, end: 0.95 }}
        >
          <img src={lamp2right} id="lamp2right"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={5} sticky={{ start: 0.06, end: 0.8 }}>
          <img src={clouds} id="clouds"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-20}
          sticky={{ start: 0.37, end: 0.92 }}
        >
          <img src={lampleft} id="lampleft"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2.1}>
          <div>
            <h1> HELLO WORLD!</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h1> HELLO WORLD2!</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h1> HELLO WORLD3!</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div style={{ height: "250px", width: "400px", color: "purple" }}>
            <h1> HELLO WORLD4!</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={sign} style={{ height: "400px", width: "400px" }}></img>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default App;
