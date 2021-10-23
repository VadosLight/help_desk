import { useState } from "react";
import "./MobileHeader.css";

export const MobileHeader = (): JSX.Element => {
  const isVisibleMenu = useState<boolean>(false);

  return <div className="MobileHeader">MobileHeader</div>;
};
