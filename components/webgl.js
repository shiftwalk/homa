import { useEffect, useRef } from "react";
import Experience from "@/helpers/webgl/Experience.js";

export default function WebGL() {
  const canvasRef = useRef(null);

  let experience;
  useEffect(() => {
    experience = new Experience(canvasRef.current);

    const section = document.querySelector("#test");
    experience.world.addModel(
      "/models/test.glb",
      section,
      3.5,
      0.22,
      -3,
      0.08,
      0.001
    );
  });

  return <canvas ref={canvasRef} id="webgl"></canvas>;
}
