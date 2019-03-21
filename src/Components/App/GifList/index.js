import React from "react";
import PropTypes from "prop-types";
import Gif from './../Gif';
import './../App'

class GifList extends React.Component {
  render() {
    const results = this.props.data;
    let gifs = results.map( gif => <Gif url={gif.embed_url} key={gif.id} /> );

    return (
      <div className="gifList">
        { gifs }
      </div>
    );
  }
}

export default GifList;
