import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import road from "./Road.png";
import first from "./fm.png";
import flamp from "./lampr.png";
import sign from "./roadsign.png";
import leftlamp from "./lampleft.png";
import slamp from "./lamp2r.png";
import middle from "./MM.png";
import last from "./LM.png";

export default function App() {
  const { scrollY } = useScroll();

  const scaleRoad = useTransform(scrollY, [0, 500], [1.5, 1]);
  const transformmountain = useTransform(scrollY, [0, 900], [2, 1.7]);
  const scalesign = useTransform(scrollY, [0, 500], [1, 0.7]);
  const scalelamp = useTransform(scrollY, [0, 500], [0.7, 0.5]);
  return (
    <div style={{ width: "100vw", height: "100vh", color: "red" }}>
      <div>
        <motion.img
          style={{
            height: "700px",
            width: "1550px",
            position: "fixed",
            bottom: "60%",
            // left: "15%",
            zIndex: "2000",
            scale: transformmountain,
          }}
          src={first}
        ></motion.img>

        <motion.img
          style={{
            height: "700px",
            width: "1550px",
            position: "fixed",
            bottom: "45%",
            // left: "15%",
            zIndex: "1999",
            scale: transformmountain,
          }}
          src={middle}
        ></motion.img>

        <motion.img
          style={{
            height: "200px",
            width: "1500px",
            position: "fixed",
            bottom: "60%",
            // left: "13.4%",
            zIndex: "1998",
            scale: transformmountain,
          }}
          src={last}
        ></motion.img>
      </div>
      <div>
        <motion.img
          style={{
            height: "800px",
            width: "1870px",
            position: "absolute",
            top: "1400px",
            zIndex: "3000",
            scale: scaleRoad,
          }}
          src={road}
        ></motion.img>
      </div>
      <div
        style={{ position: "sticky", left: "4%", top: "49%", zIndex: "3000" }}
      >
        <motion.img
          style={{
            height: "250px",
            width: "300px",
            scale: scalesign,
          }}
          src={sign}
        ></motion.img>
      </div>
      <div style={{ position: "fixed", right: "28%", top: "69%" }}>
        <motion.img
          src={flamp}
          style={{
            height: "300px",
            width: "130px",
            scale: scalelamp,
          }}
        ></motion.img>
      </div>
      <div
        style={{ position: "fixed", left: "20%", top: "35%", zIndex: "3200" }}
      >
        <motion.img
          src={leftlamp}
          style={{ height: "650px", scale: scalelamp }}
        ></motion.img>
      </div>
      <div
        style={{ position: "fixed", right: "48%", top: "42%", zIndex: "3200" }}
      >
        <motion.img
          src={slamp}
          style={{
            height: "300px",
            width: "130px",
            scale: scalelamp,
          }}
        ></motion.img>
      </div>
      <div
        style={{ position: "fixed", right: "4%", top: "8%", zIndex: "3000" }}
      >
        <motion.img
          src={slamp}
          style={{
            height: "1650px",
            scale: scalelamp,
          }}
        ></motion.img>
      </div>
    </div>
  );
}
