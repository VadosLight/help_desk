import { useContext, useState } from "react";
import { Fab } from 'ui-neumorphism';
import { useWindowSize } from "../../../hooks";
import { ThemeContext } from '../../../storage'

import "./MobileHeader.scss";

const MobileMenu = (): JSX.Element => {
  const { isDark } = useContext(ThemeContext)


  return <div className="MobileMenu" style={{
    backgroundColor: isDark ? '--dark-bg' : '--light-bg',
  }}>
    <div className="MobileMenu__Content">
      Я мобильное меню
    </div>
  </div>
}

export const MobileHeader = (): JSX.Element => {
  const { isDark } = useContext(ThemeContext)
  const [isVisibleMenu, setVisibilityMenu] = useState<boolean>(false);
  const ws = useWindowSize()

  if (ws.device !== 'mobile') {
    setVisibilityMenu(false)
  }

  return <div className="MobileHeader">
    <Fab dark={isDark} size="large" onClick={() => { setVisibilityMenu(!isVisibleMenu) }}>
      <span style={{ fontSize: '30px', margin: '0 5px 5px' }}>&#43;</span>
    </Fab>
    {isVisibleMenu && <MobileMenu />}
  </div>;
};
