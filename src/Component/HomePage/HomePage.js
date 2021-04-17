import React, { Component } from "react";
import "./HomePage.css";
import { ImTwitter } from "react-icons/im";

export default class HomePage extends Component {
  ///////////////////////////////////////////// state///////////////////////////////////////////

  state = {
    page: "accueil",
    pseudo: "",
    password: "",
  };

  ///////////////////////////////////////////// Methodes ///////////////////////////////////////////

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  connection = () => {
    this.setState({ page: "connection" });
  };

  ///////////////////////////////////////////// render ///////////////////////////////////////////

  render() {
    if (this.state.page === "accueil") {
      return (
        <div>
          <div className="main">
            <ImTwitter className="twitterLogo" />

            <h1>Ça se passe maintenant</h1>
            <h2>Rejoingnez Twitter dès aujourd'hui.</h2>
            <div>
              <button className="btnInscription">S'inscrire</button>
            </div>
            <div>
              <button className="btnConnection" onClick={this.connection}>
                Se connecter
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === "connection") {
      return (
        <div className="connectionMain">
          <ImTwitter className="twitterLogo" />

          <h2>Se connecter à Twitter</h2>

          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="inputConnection"
                type="text"
                name="pseudo"
                value={this.state.pseudo}
                placeholder="pseudo"
                onChange={this.handleChange}
                autoFocus={true}
              />
            </div>
            <div>
              <input
                className="inputConnection"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Mot de passe"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                className="btnConnection"
                type="submit"
                value="Se connecter"
              />
            </div>
          </form>
        </div>
      );
    }
  }
}
