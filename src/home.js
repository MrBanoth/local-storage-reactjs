import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function home() {
    var userId = localStorage.getItem('userId');
    console.log(userId);
    function logout(){
        localStorage.clear();
    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-4 text-center text-warning mt-4">
                    <h1 className='text-warning '>Home page</h1>
                    <h2 className='text-warning  mt-4'>Welcome To Home Page!!</h2>  
                    <div className=" m-5 p-5">
                        {
                            userId == null && 
                            <div>
                                
                                <Link to="/login" className="btn btn-success mx-2">Login</Link>
                                <Link to="/signup" className="btn btn-success mx-2">Signup</Link>
                            </div>
                        }
                        {
                            userId != null &&
                            <div>
                                <h2>Welcome Mr . User {userId}</h2>
                                <Link to="/login" onClick={e => logout()} className="btn btn-primary mx-2">Logout</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default home