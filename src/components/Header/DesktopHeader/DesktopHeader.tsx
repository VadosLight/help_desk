import { useHistory } from 'react-router';
import { Button, Switch, Alert } from 'ui-neumorphism';
import { useTheme } from '../../../hooks';
import './DesktopHeader.scss'

export const DesktopHeader = (): JSX.Element => {
  const { isDark, toggleTheme } = useTheme()
  const history = useHistory()

  return <div className="DesktopHeader">
    <Alert dark={isDark} type="success">Лицей 378</Alert>
    <Button dark={isDark} onClick={() => { history.push('/') }}>Главная</Button>
    <Button dark={isDark} onClick={() => { history.push('/applications') }}>Заявки</Button>
    <Button dark={isDark} onClick={() => { history.push('/manuals') }}>Инструкции</Button>
    <Button dark={isDark} onClick={() => { history.push('/software') }}>ПО</Button>

    <Switch
      dark={isDark}
      label="Выбор темы"
      className="DesktopHeader__SwitchTheme"
      onChange={toggleTheme}
    />
  </div>;
};
