import React from "react";
import PropTypes from "prop-types";
import Gif from './../Gif';

class Gifs extends React.Component {

  state = {
    gifs: [],
    value: 'Sad'
  }

  componentDidMount() {
    this.fetchValue();
  };

  fetchValue = () => {
    this.setState({
      value: 'happy'
    })
    const api = `https://api.giphy.com/v1/gifs/search?api_key=dc5Jl77M8jP12ti5n0Inhx5qi43m6bie&q=${this.state.value}&limit=1`;

    fetch(api)
      .then(res => res.json())
      .then(responseData => {
        this.setState({
          gifs: [
            ...responseData.data,
          ]
        });
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div className="imgButtonContainer">
      <button onClick={() => this.fetchValue(this.state.value)}> Get {this.state.value}! </button>
        <div>{this.state.gifs.map((gif, key) => (
          <Gif key={key} image={gif.images.fixed_height.url} />
        ))}
        </div>
      </div>
    )
  }
}

Gifs.propTypes = {
  state: PropTypes.string,
};

export default Gifs;
