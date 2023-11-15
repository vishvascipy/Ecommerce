import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import dress1 from "../../img/dress1.jpg"
import dress2 from "../../img/dress2.jpg"
import dress3 from "../../img/dress3.jpg"
import ad1 from "../../img/ad1.jpg"
import ad2 from "../../img/ad2.jpg"
import ad3 from "../../img/ad3.jpg"
import "./home.css"
import { Link } from "react-router-dom";


function Home() {
    const imageStyle = {
        maxWidth: "100%",
        height: "30rem",
    }
    return (
        <>
            <div>
                <h2>E Commerce Welcomes You</h2>
            </div>
            <div id="carouselExampleControls" className="carousel slide car" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dress1} className="d-block w-100" alt="dress1" style={imageStyle} />
                    </div>
                    <div className="carousel-item">
                        <img src={dress2} className="d-block w-100" alt="dress2" style={imageStyle} />
                    </div>
                    <div className="carousel-item">
                        <img src={dress3} className="d-block w-100" alt="dress3" style={imageStyle} />
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

            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad1} className="card-img-top" alt="Elegant Blue Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad2} className="card-img-top" alt="Stylish Red Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad3} className="card-img-top" alt="Fashionable Green Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad1} className="card-img-top" alt="Elegant Blue Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad2} className="card-img-top" alt="Stylish Red Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad3} className="card-img-top" alt="Fashionable Green Dress" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <Link to="/WinterSets" className="col-sm-4">
                        <div className="col-sm-4">
                            <div className="card crd" style={{ width: "18rem" }}>
                                <img src={ad1} className="card-img-top" alt="Winter Sets" />
                                <div className="card-body">
                                    <p className="card-text"><b>Winter Sets</b></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Occasionwear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad2} className="card-img-top" alt="Occasion wear" />
                            <div className="card-body">
                                <p className="card-text"><b>Occasion wear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Sportswear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad3} className="card-img-top" alt="Sports wear" />
                            <div className="card-body">
                                <p className="card-text"><b>Sports wear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Footwear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad3} className="card-img-top" alt="Footwear" />
                            <div className="card-body">
                                <p className="card-text"><b>Footwear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Accessories" className="col-sm-4">
                    <div className="col-sm-6">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={ad3} className="card-img-top" alt="Accessories" />
                            <div className="card-body">
                                <p className="card-text"><b>Accessories</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
            
        </>
    );
}

export default Home;
