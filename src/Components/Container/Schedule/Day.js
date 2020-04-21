import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <React.Fragment>
    <li className="list-group-item">
      <p id="day" className="text-center">
       Day: {props.day}
      </p>
      <p id="location" className="text-center">
       Location: {props.location}
      </p>
      <p id="hours" className="text-center">
       Hours: {props.hours}
      </p>
      <p id="booth" className="text-center">
       Booth: {props.booth}
      </p>
    </li>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;