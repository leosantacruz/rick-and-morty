import React from "react";
import Navbar from "../components/Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
