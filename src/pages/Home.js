import React from "react";
import Background from "../images/Background.gif";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="text-center">
          <h3 className="mb-4 mt-5">Welcome to my Rick and Morty website</h3>
          <img src={Background} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
