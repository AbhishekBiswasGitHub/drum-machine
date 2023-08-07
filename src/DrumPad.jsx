import PropTypes from "prop-types";

import "./DrumPad.css";

const DrumPad = ({
  keyIs,
  name,
  src,
  handleDisplay,
}) => {
  const playAudio = (event) => {
    event.target.lastChild.play();
    handleDisplay(event.target.id);
  };

  return (
    <div
      id={name}
      className="drum-pad"
      onClick={playAudio}
    >
      {keyIs}
      <audio
        id={keyIs}
        className="clip"
        src={src}
      ></audio>
    </div>
  );
};

DrumPad.propTypes = {
  keyIs: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleDisplay: PropTypes.func.isRequired,
};

export default DrumPad;
