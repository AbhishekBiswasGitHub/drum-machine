import { useState } from "react";

import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleDisplay = (id) => {
    setDisplay(id);
  };

  return <div id="drum-machine"></div>;
};

export default App;
