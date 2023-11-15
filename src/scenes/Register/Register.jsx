import React from "react";
import { Link } from "react-router-dom";

function UserRegister() {
    return (
        <>
            <div className="container mb-5 p-4">
                <div className="shadow p-5 mt-5 bg-body-teritory-rounded">
                    <form>
                        <h1 className="display-5 mb-4">Register</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input className="form-control" type="text" name="firstName" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input className="form-control" type="text" name="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="text" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" name="password" placeholder="Password" />
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Your Option</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Buyer</option>
                                        <option value="3">Seller</option>
                                    </select>
                                </div>
                                <div className=" d-flex justify-content-end align-items-center">
                                    <button type="button" class="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                            <Link to="/Login">Already have an account?</Link>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )

}
export default UserRegister