import React from "react";
import PropTypes from "prop-types";
import Gif from './../Gif';

class Gifs extends React.Component {

  state = {
    gifs: [],
    value: 'sad',
  }

  componentDidMount() {
    this.fetchValue();
  };

  fetchValue = () => {
    const moods = ['sad', 'happy', 'angry', 'confused', 'upset', 'laughing', 'clapping', 'flirting', 'tired'];
    const randomMood = moods[Math.floor(Math.random()*moods.length)];

    this.setState({
      value: randomMood
    })
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(process.env);
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.state.value}&limit=1`;

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
    return (
      <div className="imgButtonContainer">
        <div>{this.state.gifs.map((gif, key) => (
          <Gif key={key} image={gif.images.fixed_height.url} />
        ))}
        </div>
          <button onClick={() => this.fetchValue(this.state.value)}>Change mood!</button>
      </div>
    )
  }
}

Gifs.propTypes = {
  state: PropTypes.string,
};

export default Gifs;
