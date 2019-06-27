import React from "react";
import Background from "../images/Background.gif";
import "../pages/styles/Home.css";
import Fiesta from "../components/Fiesta";

class Home extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const height = document.documentElement.clientHeight - 50;
    const width = document.documentElement.clientWidth - 50;

    this.setState({
      data: {
        gravity: 0.1,
        width: width,
        height: height
      }
    });
  }

  bulletTime = e => {
    const height = document.documentElement.clientHeight;
    let newGravity = 0.1;

    if (e.clientY < height / 2) {
      newGravity = 0.12;
    } else {
      newGravity = -0.12;
    }

    this.setState({
      data: { gravity: newGravity }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Fiesta
          gravityManipulation={this.bulletTime}
          width={this.state.data.width}
          height={this.state.data.height}
          gravity={this.state.data.gravity}
        />

        <div class="text-center">
          <h3 className="mb-4 mt-5">Move the mouse up and down</h3>
          <img src={Background} id="homeBackground" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
