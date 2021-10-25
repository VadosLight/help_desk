import "./App.scss";
import { CSSProperties, useContext, useEffect } from "react";
import { Header } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { overrideThemeVariables } from "ui-neumorphism";
import { ThemeContext } from './storage'

import 'ui-neumorphism/dist/index.css'

const darkStyle: CSSProperties = {
  backgroundColor: '#444444',
}

const lightStyle: CSSProperties = {
  backgroundColor: '#e4ebf5',

}

function App(): JSX.Element {
  const { isDark } = useContext(ThemeContext);
  const style = isDark ? darkStyle : lightStyle

  useEffect(() => {
    overrideThemeVariables({
      // '--light-bg': '#E9B7B9',
      // '--light-bg-dark-shadow': '#ba9294',
      // '--light-bg-light-shadow': '#ffdcde',
      // '--dark-bg': '#292E35',
      // '--dark-bg-dark-shadow': '#21252a',
      // '--dark-bg-light-shadow': '#313740',
      // '--primary': '#8672FB',
      // '--primary-dark': '#4526f9',
      // '--primary-light': '#c7befd'
    })
  })

  return (
    <BrowserRouter>
      <div className='App' style={style}>
        <Header />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
