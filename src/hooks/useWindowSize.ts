import { useEffect, useState } from "react";

type Device = "mobile" | "tablet" | "desctop";

type WindowSize = {
  width: number;
  height: number;
  device: Device;
};

const getDeviceByWidth = (width: number): Device => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1152) {
    return "tablet";
  } else {
    return "desctop";
  }
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    device: getDeviceByWidth(window.innerWidth),
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        device: getDeviceByWidth(window.innerWidth),
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
