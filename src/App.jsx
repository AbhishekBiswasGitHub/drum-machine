import { useState } from "react";

import DrumPads from "./DrumPads";

import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleDisplay = (id) => {
    setDisplay(id);
  };

  return (
    <div id="drum-machine">
      <DrumPads handleDisplay={handleDisplay} />
    </div>
  );
};

export default App;
