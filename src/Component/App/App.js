import React, { Component } from "react";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import Form from "../Form/Form";
import Tweet from "../Tweet/Tweet";

export default class App extends Component {
  state = {
    userLogged: {
      pseudo: "",
      tweets: [],
    },
    users: [{ pseudo: "admin", password: "admin", tweets: [] }],
  };

  logIn = (connectionInfo) => {
    const findUser = this.state.users.find(
      (user) =>
        user.pseudo === connectionInfo.pseudo &&
        user.password === connectionInfo.password
    );
    if (findUser) {
      this.setState({
        userLogged: { pseudo: findUser.pseudo, tweets: [...findUser.tweets] },
      });
    }
  };

  addTweet = (tweet) => {
    this.changeTweets([...this.state.userLogged.tweets, { desc: tweet }]);
  };
  changeTweets = (tweet) => {
    const { userLogged } = this.state;

    const usersCopy = this.state.users.map((user) => {
      if (user.pseudo === userLogged.pseudo) {
        user.tweets = tweet;
      }
      return user;
    });

    this.setState({
      userLogged: {
        pseudo: userLogged.pseudo,
        tweets: tweet,
      },
      users: usersCopy,
    });
  };

  render() {
    console.log(this.state.userLogged);
    console.log(this.state.users);

    if (this.state.userLogged.pseudo) {
      return (
        <div>
          <Form handleSubmit={this.addTweet} />
          <Tweet
            tweet={this.state.userLogged.tweets}
            checkTweet={this.checkTweet}
          />
        </div>
      );
    } else {
      return (
        <div>
          <HomePage logIn={this.logIn} />
        </div>
      );
    }
  }
}
