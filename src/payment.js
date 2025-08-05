import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function payment() {

    const userId = localStorage.getItem('userId');
    console.log("Initial userId:", userId);

    function logoutFunction() {
        localStorage.clear();
        console.log("userId after clear:", localStorage.getItem('userId'));
        window.location.href = "/";
    }

    return (
        <div className="container">
            <div className=' row justify-content-center mt-5'>
                <div className='col-3 mt-5'>
                    <h1 className='text-center text-warning'>Payment Page </h1>
                    {
                        userId == null && 
                        <div className='d-grid mt-5'>
                            <button className='btn btn-warning mx-2'>Please login to make payment <a href="/login"  >Login</a></button>
                        </div>
                    }
                    {
                        userId != null && 
                        <div className='d-grid mt-5'>
                            <button onClick={e => logoutFunction()} className='btn btn-warning mx-2'>Pay Now</button>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default payment
