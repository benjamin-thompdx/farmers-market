import React from "react";
import PropTypes from "prop-types";

function ProduceByMonth(props){
  return (
    <React.Fragment>
      <h3>{props.month}'s Produce:</h3>
      <ul>
        {props.selection.join(", ")} 
      </ul>
    </React.Fragment>
  );
}

ProduceByMonth.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default ProduceByMonth;