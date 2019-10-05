import React from 'react';
import TranslateComponent from "./TranslateComponent";
import ResponsiveContainer from "./container/ResponsiveContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Switch>
          <Route path='/' component={TranslateComponent}/>
        </Switch>
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;


