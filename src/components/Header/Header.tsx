import { useHistory } from "react-router";
import { useWindowSize } from "../../hooks";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { Button } from "ui-neumorphism";
import "./Header.scss";

export const Header = (): JSX.Element => {
  const history = useHistory();
  const ws = useWindowSize();

  return (
    <header className="Header">
      {ws.device === "mobile" ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};
