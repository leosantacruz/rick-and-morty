import React from "react";
import "../pages/styles/Characters.css";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

class Characters extends React.Component {
  state = {
    pageNumber: 1,
    loading: true,
    data: {
      info: [],
      results: []
    }
  };

  componentDidMount() {
    console.log("Montado");
    this.getData();
  }

  getData = async e => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?limit=4&page=${
          this.state.pageNumber
        }`
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        data: data,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  changePage = e => {
    this.setState(
      {
        loading: true,
        pageNumber: this.state.pageNumber + e
      },
      () => {
        this.getData();
      }
    );
  };

  componentWillUnmount() {
    console.log("Desmontado");
  }

  render() {
    console.log("renderizado");
    return (
      <React.Fragment>
        <h4 className="mb-4 mt-4">List of characters</h4>
        <div className="mb-2">Page number: {this.state.pageNumber}</div>
        <div className="btn-group mb-4">
          <button
            className="btn btn-success"
            onClick={e => this.changePage(-1)}
          >
            Page before
          </button>
          <button
            className="btn btn-success"
            onClick={e => this.changePage(+1)}
          >
            Next page
          </button>
        </div>

        {this.state.loading && <Loader />}

        <div className="row">
          {this.state.data.results.map(p => {
            return (
              <React.Fragment key={p.id}>
                <Link
                  to={`/detail/${p.id}`}
                  className="col-sm-4 text-decoration-none text-reset"
                >
                  <div className="media">
                    <img
                      className="mr-3"
                      src={p.image}
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">{p.name}</h5>
                      Species: {p.species}
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>

        <div className="mb-2">Page number: {this.state.pageNumber}</div>
        <div className="btn-group mb-4">
          <button
            className="btn btn-success"
            onClick={e => this.changePage(-1)}
          >
            Page before
          </button>
          <button
            className="btn btn-success"
            onClick={e => this.changePage(+1)}
          >
            Next page
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Characters;
