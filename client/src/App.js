
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styles/App.css';
import "./styles/main.css"

import NewsLetter from "./pages/NewsLetter";
import Product from "./pages/Product";
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop";
import { AssetContextProvider as AssetContext } from "./context/AssetContext";
import { ThemeContextProvider as ThemeContext} from "./context/ThemeContext";
import ThemeSwtich from "./components/theme switch/ThemeSwitch";


function App() {
  
  return (
    <>
    <AssetContext>
      <ThemeContext>
        <Router>
            <ThemeSwtich/>
            <ScrollToTop/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/product/:id">
                  <Product/>
                </Route>
                <Route path="/newsletter">
                  <NewsLetter/>
                </Route>
              </Switch>
        </Router>
      </ThemeContext>
    </AssetContext>
    </>
  );
}

export default App;
