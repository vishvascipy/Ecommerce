import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ad1 from "../../img/ad1.jpg"
import ad2 from "../../img/ad2.jpg"
import ad3 from "../../img/ad3.jpg"
import photo7 from "../../img/photo7.jpg"
import photo6 from "../../img/photo6.jpg"
import photo8 from "../../img/photo8.jpg"
import photo5 from "../../img/photo5.jpg"
import photo9 from "../../img/photo9.jpg"
import photo10 from "../../img/photo10.jpg"
import { Link } from "react-router-dom";
function BoyFashion() {
    return( 
        <>
        <div className="p-5">
            <h4>Boys Fashion Clothes</h4>
        </div>
            <div className="container mt-4">
                <div className="row">
                    <img src={photo10} width="40px"/>
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
                                <img src={photo7} className="card-img-top" alt="Winter Sets" />
                                <div className="card-body">
                                    <p className="card-text"><b>Winter Sets</b></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Occasionwear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={photo6} className="card-img-top" alt="Occasion wear" />
                            <div className="card-body">
                                <p className="card-text"><b>Occasion wear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Sportswear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={photo8} className="card-img-top" alt="Sports wear" />
                            <div className="card-body">
                                <p className="card-text"><b>Sports wear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Footwear" className="col-sm-4">
                    <div className="col-sm-4">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={photo5} className="card-img-top" alt="Footwear" />
                            <div className="card-body">
                                <p className="card-text"><b>Footwear</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Accessories" className="col-sm-4">
                    <div className="col-sm-6">
                        <div className="card crd" style={{ width: "18rem" }}>
                            <img src={photo9} className="card-img-top" alt="Accessories" />
                            <div className="card-body">
                                <p className="card-text"><b>Accessories</b></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
        </>
    )

}
export default BoyFashion