import { useEffect, useRef } from "react";
import Experience from "@/helpers/webgl/Experience.js";

export default function WebGL() {
  const canvasRef = useRef(null);

  let experience;
  useEffect(() => {
    experience = new Experience(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} id="webgl"></canvas>;
}
