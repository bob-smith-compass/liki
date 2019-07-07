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
const ConfigContext = React.createContext(); // Hookes will be used to consume this context
const configValues = {
  name: 'David Shams',
  primaryImage: 'https://images.unsplash.com/photo-1562337589-136d8a7dd9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  secondaryImage: 'https://images.unsplash.com/photo-1562351768-f68650f3ec54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}


function App() {
  return (
    <ConfigContext.Provider values={configValues}>
      <div className="container">
        <Todo />
        <div className="well">
          <Links />
          <ImageToggle
            primaryImage={configValues.primaryImage}
            secondaryImage={configValues.secondaryImage}
          />
          <div>
            <span className="LrzXr kno-fv">274 m/s<sup>2</sup>; 28 × Earth</span>
          </div>
          <Events />
        </div>
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
