import React from "react";
import PropTypes from "prop-types";

const Gif = props => {

  return (
    <div>
      <img src={props.image} />
    </div>
  )
}

export default Gif;
