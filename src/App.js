import React from "react";
import Listado from "./pages/Listado";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <div className="col-sm-6 offset-sm-3">
        <Listado />
      </div>
    </React.Fragment>
  );
}

export default App;
