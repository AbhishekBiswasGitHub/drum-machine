import PropTypes from "prop-types";

import "./Display.css";

const Display = ({ display }) => {
  return (
    <div id="display">
      <span>{display}</span>
    </div>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Display;
