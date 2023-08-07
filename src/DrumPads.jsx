import { useEffect } from "react";

import PropTypes from "prop-types";

import "./DrumPads.css";

const drumPads = [
  {
    keyIs: "Q",
    name: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyIs: "W",
    name: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyIs: "E",
    name: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyIs: "A",
    name: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyIs: "S",
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyIs: "D",
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyIs: "Z",
    name: "Kick-n-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyIs: "X",
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyIs: "C",
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const DrumPads = ({ handleDisplay }) => {
  const handleKeyDown = (event) => {
    const audio = document.getElementById(
      event.key.toUpperCase()
    );

    if (audio) {
      audio.parentElement.focus();
      audio.parentElement.click();
    }
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      handleKeyDown
    );
  });

  return <div id="drum-pads"></div>;
};

DrumPads.propTypes = {
  handleDisplay: PropTypes.func.isRequired,
};

export default DrumPads;
