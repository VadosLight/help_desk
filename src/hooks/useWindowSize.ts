import { useEffect, useState } from "react";

type Device = "mobile" | "tablet" | "desktop";

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
    return "desktop";
  }
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    device: getDeviceByWidth(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        device: getDeviceByWidth(window.innerWidth),
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
