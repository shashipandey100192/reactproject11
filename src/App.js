
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Mygallery from './pages/Gallery';
import Myfooter from './pages/Footer';

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



      
    </>

  )
=======
    <div>
    <h1>welcome to react.js</h1>
    <button type="button" className="btn btn-primary m-2">Primary</button>
    <button type="button" className="btn btn-secondary m-2">Secondary</button>
<button type="button" className="btn btn-success m-2">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>
<img src="image/img.jpg" alt="Show Image"/>
<img src="image/img2.jpg" alt="Show Image"/>
<img src="image/img3.jpg" alt="Show Image"/>
<img src="image/img4.jpg" alt="Show Image"/>
<img src="image/img5.jpg" alt="Show Image"/>
<img src="image/img6.jpg" alt="Show Image"/>
<img src="image/img7.jpg" alt="Show Image"/>
<img src="image/calculator.png" alt="Show Image"/>
    </div>
    )
>>>>>>> 0c6533d76aecae9b2c7c80c9402e0c4fe59ec78d
}

export default App;