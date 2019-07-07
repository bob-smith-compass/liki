import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageToggle from './components/image-tggle/ImageToggle';
import Events from './components/events/Events';
import Links from './components/links/Links';
import Todo from './components/todo/Todo';
// import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * Context API
 */
const ConfigContext = React.createContext();


function App() {
  return (
    <div className="container">
      <Todo />
      <div className="well">
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
