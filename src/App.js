import "./App.css";
import React, { Component } from "react";
import Picture from "./fattouma.jpg";
import Timer from "./component/Profile";

class App extends Component {
  state = {
    Person: {
      fullName: "Ben jeddou Fatma",
      bio: "Expert cyber security",
      imgSrc: Picture,
      profession: "STUDENT",
    },
    show: false,
  };

  render() {
    var Handlechange = () => {
      this.setState({
        show: !this.state.show,
      });
    };

    return (
      <center>
        <div>
          <button onClick={Handlechange}>
            {this.state.show ? "Hide" : "show"}
          </button>

          <p className="faty">
            <Timer />
            {this.state.show ? (
              <div>
                <h1>{this.state.Person.fullName}</h1>
                <h2>{this.state.Person.bio}</h2>
                <h3>{this.state.Person.profession}</h3>

                <img src={Picture} alt="profile" />
              </div>
            ) : null}
          </p>
        </div>
      </center>
    );
  }
}

export default App;
