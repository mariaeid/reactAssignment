import React from "react";
import PropTypes from "prop-types";

const Gif = props => {

  return (
    <div>
      <img src={props.image} alt="gif from Giphy"/>
    </div>
  )
}

Gif.propTypes = {
  image: PropTypes.string,
};

export default Gif;
