import React from "react";

function ForgotPassword() {
    return (
        <>
            <div className="container mb-5 p-5">
                <div className="container-sm w-50 shadow p-5 mt-5 bg-body-teritory rounded">
                    <h1 className="display-6 mb-4">Forgot Password</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input className="form-control" type="password" name="NewPassword" id="NewPassword" placeholder="New Password" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm New Password</label>
                            <input className="form-control" type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm New Password"/>
                        </div>
                        <button className="btn btn-secondary">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )

}
export default ForgotPassword