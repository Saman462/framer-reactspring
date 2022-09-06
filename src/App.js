import "./App.css";
import sky from "./BS.png";
import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
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
  const scaleMountain1 = useTransform(scrollY, [0, 500], [1.14, 1]);
  const scaleMountain2 = useTransform(scrollY, [0, 500], [1.135, 1]);
  const scaleMountain3 = useTransform(scrollY, [0, 500], [1.13, 1]);

  // const scaleRoad = useTransform(scrollY, [0, 500], [1.3, 1.2]);
  const scaleLampPost1 = useTransform(scrollY, [0, 500], [1, 1.15]);
  const scalesign = useTransform(scrollY, [0, 500], [0.98, 1.06]);
  const scaleLampPost2 = useTransform(scrollY, [0, 500], [0.88, 1.05]);
  const scaleme = useTransform(scrollY, [0, 500], [1, 1]);
  return (
    <div>
      <nav class="navbar">
        <h1 class="logo">LIGHTS</h1>
        <ul class="nav-links">
          <li class="active">
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Tours
          </li>
          <li>
            <a href="#"></a>Explore
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li class="ctn">
            <a href="#"></a>Contact
          </li>
        </ul>
      </nav>
      <Parallax
        pages={4}
        style={{
          overflow: "visible",
          top: "0",
          left: "0",
          width: "100%",
          backgroundImage: { sky },
          height: "100vh",
        }}
      >
        <ParallaxLayer offset={0.1} speed={9} sticky={{ start: 0.15, end: 2 }}>
          <img src={clouds} id="clouds"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} sticky={{ start: 0.59, end: 1 }}>
          <motion.img
            id="last"
            src={last}
            style={{ ScaleY: scaleMountain3 }}
          ></motion.img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4} sticky={{ start: 0.55, end: 2 }}>
          <motion.img
            src={middle}
            id="middle"
            style={{ scaleY: scaleMountain2 }}
          ></motion.img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8} sticky={{ start: 0.5, end: 1 }}>
          <motion.img
            src={first}
            id="first"
            style={{
              scaleY: scaleMountain1,
            }}
          ></motion.img>
        </ParallaxLayer>
        <ParallaxLayer speed={0} factor={0} sticky={{ start: 0.92, end: 4 }}>
          <motion.img
            src={road}
            style={{ scaleY: scaleRoad }}
            id="road"
          ></motion.img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={5}
          sticky={{ start: 0.2, end: 2 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <motion.img
            src={sign}
            id="sign"
            style={{
              scaleY: scalesign,
              marginLeft: "120px",
              marginBottom: "260px",
            }}
          ></motion.img>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0} sticky={{ start: 0.2, end: 0.88 }}>
        <motion.img
          src={lampright}
          id="lampright"
          style={{ scale: scaleme }}
        ></motion.img> 
      </ParallaxLayer>*/}
        <ParallaxLayer
          offset={0.5}
          speed={95}
          sticky={{ start: 0.38, end: 1 }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <motion.img
            src={lamp2right}
            style={{
              scaleY: scaleLampPost1,
              height: "68%",
              width: "8%",
              margin: "-66px 60px",
            }}
          ></motion.img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={3.6}
          sticky={{ start: 0.24, end: 0.88 }}
        >
          <motion.img
            src={lampleft}
            id="lampleft"
            style={{ scaleY: scaleLampPost2 }}
          ></motion.img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default App;
