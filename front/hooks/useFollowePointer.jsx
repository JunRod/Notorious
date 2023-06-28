import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handlePointerMove = ({ clientX, clientY }) => {

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    element.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
    
  }, []);

  return point;
}
