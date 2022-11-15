import React, {Fragment} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Mygallery from './pages/Gallery';
import Myfooter from './pages/Footer';

function App() {
  return (
    <Fragment>
    <div>
              <h1 className="border mt-5">welcome to react.js</h1>
              <button type="button" className="btn btn-primary mb-5">Primary</button>
              <button type="button" className="btn btn-secondary ms-5">Secondary</button>
          <button type="button" className="btn btn-success m-s-5">Success</button>
          <button type="button" className="btn btn-danger ml-5">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>
          <img src="image/img2.jpg" alt="ducat" />
          <Myfooter />
          <Mygallery />
          
    </div>
    
    </Fragment>
    )

}

export default App;