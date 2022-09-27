import { useEffect, useRef } from "react";
import Experience from "@/helpers/webgl/Experience.js";

export default function TestWebgl() {
  const canvasRef = useRef(null);

  let experience;
  useEffect(() => {
    experience = new Experience(canvasRef.current);

    const section = document.querySelector("#test");
    experience.world.addModel("/models/test.glb", section, 0.22);

    // experience.world.addModel("/models/test.glb", { x: 350, y: 0 });
  });

  return <canvas ref={canvasRef} id="webgl"></canvas>;
}
