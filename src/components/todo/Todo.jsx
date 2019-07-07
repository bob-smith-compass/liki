import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "../alert/Alert";
import $ from "jquery/dist/jquery";
// import "popper";
// import "bootstrap/dist/js/bootstrap";

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
        <Alert type={"alert-primary"} />
        <Alert type={"alert-secondary"} />
        <Alert type={"alert-success"} />
        <Alert type={"alert-danger"} />
        <Alert type={"alert-warning"} />
        <Alert type={"alert-info"} />
        <Alert type={"alert-light"} />
        <Alert type={"alert-dark"} />
        <p>Search with mongoDB</p>
        <p>Relay GraphQL</p>
        <p>Debounce</p>
      </div>
    );
  }
}
