import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Preview from "./Preview";

function App() {
  return (
    <div>
      <Route path="/index" component={Home} exact />
      <Route path="/" component={Preview} />
    </div>
  );
}

export default App;
