import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const handlePointer = (e) => {
    console.log(e.clientX, e.clientY);
    // setX(e.clientX);
    // setY(e.clientY);
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  // useEffect(() => {
  //   return () => console.log('π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.');
  // }, [setX, setY]);

  return (
    <div className='container' onPointerMove={handlePointer}>
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
    </div>
  );
}
