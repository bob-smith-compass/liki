import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageToggle from './components/image-tggle/ImageToggle';
import Events from './components/events/Events';
import Links from './components/links/Links';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="">
      <div className="jumbotron">

      <h3>LIKI</h3>
      <p>All LIKI classmates with pictures</p>
      <p>Display current picture initially - upon hover display old 1984 pictures</p>
      <p>Sort by Year / Name / Group / City / Country</p>
      <p>Capability to upload pictures</p>
      <p>Capability to login email/authentication</p>
      <p>Polymer 3.0 and web components</p>
      <p>Google Drive connection</p>
      <p>Mongose online DB</p>
      <p>Admin?</p>
      <p>Search with mongoDB</p>
      <p>Relay GraphQL</p>
      <p>Debounce</p>
      </div>

      <div>
        <Links />

        <ImageToggle
          primaryImage={'https://images.unsplash.com/photo-1562337589-136d8a7dd9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
          secondaryImage={'https://images.unsplash.com/photo-1562351768-f68650f3ec54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
        />
        <div>
          <span className="LrzXr kno-fv">274 m/s<sup>2</sup>; 28 × Earth</span>
        </div>
        <Events />

      </div>
    </div>
  );
}

export default App;
