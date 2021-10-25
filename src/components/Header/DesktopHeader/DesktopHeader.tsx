import { useContext } from 'react';
import { Button, Switch } from 'ui-neumorphism';
import { ThemeContext } from '../../../storage';
import './DesktopHeader.scss'

export const DesktopHeader = (): JSX.Element => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return <div className="DesktopHeader">
    <Button dark={isDark}>123</Button>
    <Switch
      dark={isDark}
      className="DesktopHeader__SwitchTheme"
      onChange={toggleTheme}
    />
  </div>;
};
