import { Component } from "react";

class Form extends Component {
  ///////////////////////////////////////////// state///////////////////////////////////////////
  initialState = {
    tweet: "",
  };

  state = this.initialState;

  ///////////////////////////////////////////// Methode ///////////////////////////////////////////

  handleChange = (e) => {
    this.setState({ tweet: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSubmit(this.state.tweet);

    this.setState(this.initialState);
  };

  ///////////////////////////////////////////// Render ///////////////////////////////////////////

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="inputTweet"
          type="text"
          value={this.state.tweet}
          placeholder="Que voulez-vous tweeter ?"
          onChange={this.handleChange}
          autoFocus={true}
        />
        <input className="btnTweet" type="submit" value="Tweeter!" />
      </form>
    );
  }
}

export default Form;
