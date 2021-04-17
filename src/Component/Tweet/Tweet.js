import { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  render() {
    const tweet = this.props.tweet.map((tweet, index) => {
      return <li key={index}>{tweet.desc}</li>;
    });
    return <ul>{tweet}</ul>;
  }
}

export default Tweet;
