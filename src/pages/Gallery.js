import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Myfooter from "./Footer";

function Mygallery()
{

    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/img2.jpg" className="d-block w-100" alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="image/img3.jpg" className="d-block w-100" alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="image/img4.jpg" className="d-block w-100" alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="image/img5.jpg" className="d-block w-100" alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="image/img6.jpg" className="d-block w-100" alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="image/img7.jpg" className="d-block w-100" alt="first image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Myfooter/>
        </>
    )
}

export default Mygallery


