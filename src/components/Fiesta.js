import React from "react";
import Confetti from "react-confetti";

class Fiesta extends React.Component {
  render() {
    return (
      <div>
        <Confetti
          onMouseMove={this.props.gravityManipulation}
          id="confetti"
          width={this.props.width}
          height={this.props.height}
          gravity={this.props.gravity}
        />
      </div>
    );
  }
}

export default Fiesta;
