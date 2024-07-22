"use client";

import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useEffect(() => {
    function handleSize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener('resize', handleSize);

    handleSize();

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
