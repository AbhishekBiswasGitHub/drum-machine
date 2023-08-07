import { useState } from "react";

import DrumPads from "./DrumPads";
import Display from "./Display";

import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleDisplay = (id) => {
    setDisplay(id);
  };

  return (
    <div id="drum-machine">
      <DrumPads handleDisplay={handleDisplay} />
      <Display display={display} />
    </div>
  );
};

export default App;
