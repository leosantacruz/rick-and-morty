import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Layout from "../components/Layout";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/characters" component={Characters} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
