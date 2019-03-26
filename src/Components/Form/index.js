import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {

  state = {
    inputMood: "",
  }

  handleChange = event => {
    const target = event.target;
    const inputMood = target.inputMood;

    this.setState({
      [inputMood]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      inputMood: this.state.inputMood,
    })
  }


  render() {
    console.log(this.state);
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="inputMood">Your mood:</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="inputMood"
                inputMood="inputMood"
                value={this.state.inputMood}/>
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>
    )
  }

}

export default Form;
