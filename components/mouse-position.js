import { useState, useEffect } from 'react'

export default function MousePosition() {
  const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // get global mouse coordinates
    const handleWindowMouseMove = event => {
      setMouseCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);
  
  return (
    <div>
      <span className="block">x 
      {mouseCoords.x < 1000 && '0'}{mouseCoords.x}
      &nbsp;:&nbsp;
      y
      {mouseCoords.y < 1000 && '0'}{mouseCoords.y}
      </span>
    </div>
  )
}