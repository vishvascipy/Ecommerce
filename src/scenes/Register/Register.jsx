import React from "react";
import { Link } from "react-router-dom";

function UserRegister() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="shadow p-4 bg-body-teritory-rounded">
                        <form>
                            <h1 className="display-5 mb-4 text-center">Register</h1>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className="form-label">First Name</label>
                                    <input className="form-control" type="text" name="firstName" placeholder="First Name" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Last Name</label>
                                    <input className="form-control" type="text" name="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="text" name="email" placeholder="Email" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className="form-label">Role</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select Your Option</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Buyer</option>
                                        <option value="3">Seller</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col d-flex justify-content-end">
                                    <button type="button" className="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <Link to="/Login">Already have an account?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
