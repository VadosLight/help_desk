import { useWindowSize } from "../../hooks";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import "./Header.scss";

export const Header = (): JSX.Element => {
  const ws = useWindowSize();

  return (
    <header className="Header">
      {ws.device === "mobile" ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};
