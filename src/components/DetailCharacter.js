import React from "react";

class DetailCharacter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="my-4">
          {this.props.name} <small>{this.props.species}</small>
        </h1>

        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={this.props.image}
              alt=""
              width="100%"
            />
          </div>

          <div className="col-md-8">
            <h3 className="my-3">General information</h3>
            <p>
              This character is a{" "}
              <strong>
                {this.props.gender} {this.props.species}
              </strong>{" "}
              from the planet <strong>{this.props.origin}</strong> and is
              currently <strong>{this.props.status}</strong>
            </p>
            <h3 className="my-3">More info:</h3>
            <p>
              Praesent vel dui et justo consectetur tincidunt. Pellentesque id
              porta lacus. Aliquam ut metus suscipit, cursus felis non,
              scelerisque nunc. Nam tempus placerat risus eu sollicitudin.
              Mauris vehicula arcu eu blandit gravida. Fusce bibendum ut ligula
              at vehicula. Nullam nec nunc vitae erat egestas suscipit.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailCharacter;
