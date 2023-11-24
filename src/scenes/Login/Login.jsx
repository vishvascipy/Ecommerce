import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container-fluid mt-5 align-items-center">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-6 col-sm-4">
                    <div className="shadow p-4 bg-body-teritory rounded">
                        <h1 className="display-6 mb-4 text-center">Login</h1>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    id="email"
                                />
                                <div className="form-text" id="emailHelp"></div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            <button className="btn btn-secondary">Submit</button>
                            <div className="mt-3">
                                <Link to="/Register">Don't have an account yet?</Link>
                            </div>
                            <div className="text-start">
                                <Link to="/ForgotPassword">Forgot Password</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
