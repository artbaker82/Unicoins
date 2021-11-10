import React, { Fragment } from "react";
import spinner from "../../img/spinner2.jpg";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
