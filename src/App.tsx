import React from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" />
    </BrowserRouter>
  );
}

export default App;
