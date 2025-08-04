import axios from "axios";
import React, { useState } from "react";

function login(){

     



    return(
        <div className = "container">
               <div className = "row justify-content-center mt-5">
               <div className  = "col-3">
                <h1 className='text-center text-warning'>Login</h1>
                <form>
                    <div  className="mt-2 mb-3">
                        <label>Email</label>
                    <input type="text" className="form-control" placeholder="email" />
                    </div>
                     <div>
                        <label>Password</label>
                    <input type="text" className="form-control" placeholder="password" />
                    </div>
                    


                </form>
               </div>
               </div>
               </div>        
    )
}

export default login