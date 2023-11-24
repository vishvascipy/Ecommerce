import React from "react";

function ForgotPassword() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="shadow p-4 bg-body-teritory rounded">
                        <h1 className="display-6 mb-4 text-center">Forgot Password</h1>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="NewPassword"
                                    id="NewPassword"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm New Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="ConfirmPassword"
                                    id="ConfirmPassword"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
