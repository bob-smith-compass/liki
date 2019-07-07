import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "../alert/Alert";
import $ from "jquery/dist/jquery";
// import "popper";
// import "bootstrap/dist/js/bootstrap";
import {ConfigContext} from './App.jsx'

export default class Todo extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>LIKI</strong>

          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p className="alert-danger dissmiss">
          All LIKI classmates with pictures
        </p>
        <p>
          Display current picture initially - upon hover display old 1984
          pictures
        </p>
        <p>Sort by Year / Name / Group / City / Country</p>
        <p>Capability to upload pictures</p>
        <p>Capability to login email/authentication</p>
        <p>Polymer 3.0 and web components</p>
        <p>Google Drive connection</p>
        <p>Mongose online DB</p>
        <p>Admin?</p>
        <Alert type={"alert-primary"} title={"Sorting"} />
        <Alert type={"alert-secondary"} title={"Upload"} />
        <Alert type={"alert-success"} title={"email/authentication"} />
        <Alert type={"alert-danger"} title={"Polymer 3.0 and web components"} />
        <Alert type={"alert-warning"} title={"Google Drive connection"} />
        <Alert type={"alert-info"} title={"Mongose online DB"} />
        <Alert type={"alert-light"} title={"Admin"} />
        <Alert type={"alert-dark"} title={"Internationaliztion"} />
        {/* <Alert type={"alert-info"} title={values.name} /> */}
        <p>Search with mongoDB</p>
        <p>Relay GraphQL</p>
        <p>Debounce</p>
      </div>
    );
  }
}
