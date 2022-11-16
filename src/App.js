import React, {Fragment} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Mygallery from './pages/Gallery';
import Myfooter from './pages/Footer';
import MyContact from './pages/MyreactBootstrap';

function App() {
  return (
<<<<<<< HEAD
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <Myfooter />
    <Mygallery></Mygallery>
    <MyContact/>



      
    </>

  )
=======
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

>>>>>>> 6d172afd074ff789a20b49074446bfde6cf4f766
}

export default App;