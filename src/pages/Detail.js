import React from "react";
import DetailCharacter from "../components/DetailCharacter";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

class Detail extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      location: {},
      episode: []
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({
      loading: true
    });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${
          this.props.match.params.id
        }`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    const p = this.state.data;

    if (this.state.loading == true) {
      return (
        <React.Fragment>
          <div class="mt-4">
            <Loader />
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Link to="/characters" class="btn btn-secondary btn-sm mt-3">
          Back to the list
        </Link>
        <DetailCharacter
          name={p.name}
          species={p.species}
          location={p.location.name}
          episode={p.episode}
          image={p.image}
        />
      </React.Fragment>
    );
  }
}

export default Detail;
