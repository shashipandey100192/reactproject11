import React from "react";
import {Link} from 'react-router-dom';

function Navebar() {
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-4 mt-4'>
                    <Link to="traval">
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text"><h1>about Traval</h1></p>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='col-4 mt-4'>
                    <Link to="home">
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text"><h1>home Traval</h1></p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='col-4 mt-4'>
                    <Link to="cars">
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text"><h1>Cars</h1></p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navebar;