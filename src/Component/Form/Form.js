import { Component } from "react";

class Form extends Component {
  initialState = {
    tweet: "",
  };

  state = this.initialState;

  handleChange = (e) => {
    this.setState({ tweet: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSubmit(this.state.tweet);

    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className=".inputConnection"
          type="text"
          value={this.state.tweet}
          placeholder="Que voulez-vous tweeter ?"
          onChange={this.handleChange}
          autoFocus={true}
        />
        <input type="submit" value="Tweeter!" />
      </form>
    );
  }
}

export default Form;
