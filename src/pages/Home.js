import React from "react";
import Background from "../images/Background.gif";
import "../pages/styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="text-center">
          <h3 className="mb-4 mt-5">Welcome to my Rick and Morty website</h3>
          <img src={Background} id="homeBackground" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
