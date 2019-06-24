import React from "react";

class DetailCharacter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="my-4">
          {this.props.name} <small>{this.props.species}</small>
        </h1>

        <div className="row">
          <div className="col-md-8">
            <img
              className="img-fluid"
              src={this.props.image}
              alt=""
              width="100%"
            />
          </div>

          <div className="col-md-4">
            <h3 className="my-3">General information</h3>
            <p>
              This character is a {this.props.species} from the planet
              {this.props.location}
            </p>
            <h3 className="my-3">Episodes:</h3>
            <ul>
              {this.props.episode.map(e => {
                return (
                  <a href={e}>
                    <li>{e}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailCharacter;
