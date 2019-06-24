import React from "react";
import "../pages/styles/Listado.css";
import Loader from "../components/Loader";

class Listado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      loading: true,
      datos: {
        info: [],
        results: []
      }
    };
  }

  componentDidMount() {
    console.log("Montado");
    this.traerDatos();
  }

  traerDatos = async e => {
    try {
      const respuesta = await fetch(
        `https://rickandmortyapi.com/api/character?limit=4&page=${
          this.state.pageNumber
        }`
      );
      const datos = await respuesta.json();
      console.log(datos);
      this.setState({
        datos: datos,
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
        this.traerDatos();
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

        <div class="row">
          {this.state.datos.results.map(p => {
            return (
              <React.Fragment key={p.id}>
                <div class="col-sm-4">
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
                </div>
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

export default Listado;
