import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function home() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-4 text-center text-warning mt-4">
                    <h1 className='text-warning '>Home page</h1>
                    <h2 caslassName='text-warning  mt-4'>Welcome To Home Page!!</h2>
                    <div className="text-center m-5 p-5">
                        <Link className=" mb-2 text-center btn btn-primary d-grid gap-3" to="/signup ">Sign Up</Link>
                        <Link className="btn btn-primary d-grid" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default home