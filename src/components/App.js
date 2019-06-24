import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Layout from "../components/Layout";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/rick-and-morty/home" component={Home} />
            <Route
              exact
              path="/rick-and-morty/characters"
              component={Characters}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
