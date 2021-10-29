import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Fab, Switch } from 'ui-neumorphism';
import { useTheme, useWindowSize } from "../../../hooks";

import "./MobileHeader.scss";

type MobileMenuType = {
  toggleVisibilityMenu: () => void,
}

const MobileMenu = ({
  toggleVisibilityMenu,
}: MobileMenuType): JSX.Element => {
  const { isDark, toggleTheme } = useTheme()


  return <div className="MobileMenu" style={{
    backgroundColor: isDark ? 'var(--dark-bg)' : 'var(--light-bg)',
  }}>
    <div className="MobileMenu__Content">
      Я мобильное меню
      <div className="MobileMenu__Content__Control">
        <Switch
          dark={isDark}
          label="Выбор темы"
          className="MobileMenu__Content__Control__SwitchTheme"
          onChange={toggleTheme}
        />
        <Fab dark={isDark} size="large" onClick={toggleVisibilityMenu}>
          <span style={{ fontSize: '30px', margin: '0 5px 5px' }}>&#45;</span>
        </Fab>
      </div>
    </div>
  </div>
}

export const MobileHeader = (): JSX.Element => {
  const { isDark } = useTheme()
  const [isVisibleMenu, setVisibilityMenu] = useState<boolean>(false);
  const ws = useWindowSize()
  const handlers = useSwipeable({
    onSwipedLeft: () => setVisibilityMenu(false),
    onSwipedRight: () => setVisibilityMenu(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  }) 

  const toggleVisibilityMenu = () => { setVisibilityMenu(!isVisibleMenu) }

  useEffect(() => {
    if (ws.device !== 'mobile') {
      setVisibilityMenu(false)
    }
  }, [ws.device])

  return <div className="MobileHeader" {...handlers}>
    <Fab dark={isDark} size="large" onClick={toggleVisibilityMenu}>
      <span style={{ fontSize: '30px', margin: '0 5px 5px' }}>&#43;</span>
    </Fab>
    {isVisibleMenu && <MobileMenu toggleVisibilityMenu={toggleVisibilityMenu} />}
  </div>;
};
