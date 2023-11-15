import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="container mb-5 p-5">
                <div className="container-sm w-50 shadow p-5 mt-5 bg-body-teritory rounded ">
                    <h1 className="display-6 mb-4">Login</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control" type="text" aria-aria-describedby="emailHelp" name="email" id="email" />
                            <div className="form-text" id="emailHelp"></div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="password" name="password" id="password" />
                        </div>
                        <button className="btn btn-secondary">Submit</button>
                        <br /><br/>
                        <Link to="/Register">Don't have an account yet?</Link><br/><br/>
                        <Link to="/ForgotPassword" className="text-end">Forgot Password</Link>

                    </form>
                </div>
            </div>
        </>
    )

}
export default Login