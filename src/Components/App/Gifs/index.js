import React from "react";
import PropTypes from "prop-types";
import Gif from './../Gif';

class Gifs extends React.Component {

  state = {
    gifs: [],
    value: 'sad'
  }

  componentDidMount() {
    this.fetchValue();
  };

  fetchValue = () => {
    const mood = ['sad', 'happy', 'angry', 'confused', 'upset', 'laughing', 'clapping', 'flirting', 'tired'];
    const randomMood = mood[Math.floor(Math.random()*mood.length)];
    this.setState({
      value: randomMood
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
        <div>{this.state.gifs.map((gif, key) => (
          <Gif key={key} image={gif.images.fixed_height.url} />
        ))}
        </div>
          <button onClick={() => this.fetchValue(this.state.value)}>Change mood! </button>
      </div>
    )
  }
}

Gifs.propTypes = {
  state: PropTypes.string,
};

export default Gifs;
