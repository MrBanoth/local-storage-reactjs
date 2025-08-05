import axios from 'axios';
import React, { useState } from 'react'
function Login() {

    //var's
    var [Email, setEmail] = useState('');
    var [Password, setPassword] = useState('');
    var [okMessage, setokMessage] = useState('');
    var [noMessage , setNoMessage] = useState('');

    //validations varibales
    var [EmailError, setEmailError] = useState('');
    var [PasswordError, setPasswordError] = useState('');



    //handleEmail-and Validations
    function handleEmail(e) {
        setEmail(e.target.value);

    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }


    async function handleLoginButttonl(e) {
        e.preventDefault();
        var Error = 0;

        if (Email.length < 3) {
            setEmailError('Email must be at least 3 characters long');
            Error++;
        } else {
            setEmailError('');
        }

        if (Password.length < 3) {
            setPasswordError('Password must be at least 3 characters long');
            Error++;
        } else {
            setPasswordError('');
        }


        if (Error == 0) {
            var apiInputs = {
                "email": Email,
                "password": Password
            }

            try {
                const response = await axios.post('https://api.softwareschool.co/auth/login', apiInputs);
                if (response.data.result === "SUCCESS") {
                    setokMessage(response.data.message == "Login Success" ? response.data.message : "Login Success.");
                    setNoMessage('');
                    console.log("Login Success");
                    console.log(response.data.data.userId);
                    localStorage.setItem( "userId" , response.data.data.userId);
                    window.location.href = "/payment";
                } else {
                    setNoMessage(response.data.message == "Login Failed" ? response.data.message : "Something went wrong. Please try again.");
                    console.log("Login Failed");
                    setokMessage('');
                    
                }

            } catch (err) {
                console.log("Network or Server Error", err);
                setNoMessage("Something went wrong. Please try again.");
            }

        }
        else {
            console.log("Errors count:", Error);
        }

    }


    return (
        <div className="container">
            <div className='row justify-content-center'>
                <div className="col-3 mt-5">
                    <div>
                        <h2 className="text-center text-warning">Login</h2>
                    </div>
                    <form>
                        <div className="text-success  text-center p-2">{okMessage}</div>
                            <div className="text-danger  text-center  p-2">{noMessage}</div>
                        <div>
                            <label className="mb-2">Email:</label>
                            <input type="text" onChange={e => handleEmail(e)} placeholder=" Enter Email" className="form-control d-grid" />
                            <p className="text-danger">{EmailError}</p>

                        </div>
                        <div>
                            <label className="mb-2">Password:</label>
                            <input type="password" onChange={e => handlePassword(e)} placeholder="Enter Password" className="form-control d-grid" />
                            <p className="text-danger">{PasswordError}</p>
                        </div>
                        <div className='text-center d-grid'>
                            <button onClick={handleLoginButttonl} className=" btn btn-warning mt-3 shadow-sm">
                                Login
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login