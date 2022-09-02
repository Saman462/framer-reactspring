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
  const scaleRoad = useTransform(scrollY, [0, 500], [1.3, 1.2]);
  // const scaleRoad = useTransform(scrollY, [0, 500], [1.3, 1.2]);
  const scaleme = useTransform(scrollY, [0, 500], [1, 1]);
  // const scaleme = useTransform(scrollY, [0, 500], [1, 1]);
  return (
    <div>
      <Parallax
        pages={8}
        style={{
          overflow: "visible",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: { sky },
        }}
      >
        <ParallaxLayer offset={0} speed={0} sticky={{ start: 0.2, end: 0.88 }}>
          <img id="last" src={last}></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-888888888}
          sticky={{ start: 0.2, end: 0.88 }}
        >
          <img src={middle} id="middle"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.8}
          sticky={{ start: 0.2, end: 0.88 }}
        >
          <img src={first} id="first"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-9999999999}
          factor={0}
          sticky={{ start: 0.2, end: 0.88 }}
        >
          <motion.img
            src={road}
            style={{ scaleY: scaleRoad }}
            id="road"
          ></motion.img>
        </ParallaxLayer>
        <motion.ParallaxLayer
          offset={0}
          speed={5}
          sticky={{ start: 0.2, end: 0.88 }}
        >
          <motion.img
            src={sign}
            id="sign"
            style={{ scale: scaleme }}
          ></motion.img>
        </motion.ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0} sticky={{ start: 0.2, end: 0.88 }}>
          <motion.img
            src={lampright}
            id="lampright"
            style={{ scale: scaleme }}
          ></motion.img> 
        </ParallaxLayer>*/}
        <ParallaxLayer offset={0} speed={5} sticky={{ start: 0.2, end: 0.88 }}>
          <motion.img
            src={lamp2right}
            id="lamp2right"
            style={{ scale: scaleme }}
          ></motion.img>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={9} sticky={{ start: 0.2, end: 0.8 }}>
          <img src={clouds} id="clouds"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={3.6}
          sticky={{ start: 0.2, end: 0.88 }}
        >
          <motion.img
            src={lampleft}
            id="lampleft"
            style={{ scale: scaleme }}
          ></motion.img>
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
