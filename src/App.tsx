import { useEffect } from "react";
import { Footer, Header } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { overrideThemeVariables } from "ui-neumorphism";
import * as Pages from './pages'

import 'ui-neumorphism/dist/index.css'
import "./App.scss";
import { useTheme } from "./hooks";

function App(): JSX.Element {
  const { themeColors } = useTheme()
  // const style = isDark ? darkStyleBg : lightStyleBg

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
      <div className='App' style={themeColors}>
        <Header />
        <main className="Main">
          <Switch>
            <Route exact path="/applications" component={Pages.Applications} />
            <Route exact path="/manuals" component={Pages.Manuals} />
            <Route exact path="/software" component={Pages.Software} />
            <Route exact path="/" component={Pages.Welcome} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
