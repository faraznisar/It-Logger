import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>App</p>
      </header>
    </div>
  );
}

export default App;
