import React, { useState } from "react";
import { useHistory } from "react-router";
import { useWindowSize } from "../../hooks";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { Button } from "ui-neumorphism";
import "./Header.css";

export const Header = (): JSX.Element => {
  const histroty = useHistory();
  const ws = useWindowSize();

  return (
    <header className="Header">
      {ws.device === "mobile" ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};
