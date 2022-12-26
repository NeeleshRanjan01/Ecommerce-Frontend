import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

    const [alter, setAlter] = useState(true)

    const handelLogin = async (e) => {
        e.preventDefault();
        const obj = JSON.stringify({
            email: loginEmail,
            password: loginPass,
        })

        const obj2 = {
            email: loginEmail,
            password: loginPass,
        }

        await axios.post('https://zany-pink-pigeon-garb.cyclic.app/login', obj, { headers: { "Content-Type": "application/json" } }).then((res) => {
            if (obj2.email === res.data.email && obj2.password === res.data.password) {
                console.log(res.data)
                localStorage.setItem('name', res.data.name)
                localStorage.setItem('email', res.data.email)
                return alert("welcome "+res.data.name)
            }
            console.log(obj2.email)
            alert("Wrong Credentials")
        }).catch((error) => {
            console.log(error)
        });
    }


    const clearData = () => {
        localStorage.clear()
        setAlter(!alter)
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}

            {localStorage.getItem('email') == null ?
                <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                    <span className="fa fa-sign-in me-1"></span>Login
                </button> :
                <button type="button" className="btn btn-outline-primary ms-auto"  onClick={clearData}>
                    <span className="fa fa-sign-in me-1"></span>Logout
                </button>
            }



            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" value={loginEmail} onChange={(e) => { setLoginEmail(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" value={loginPass} onChange={(e) => { setLoginPass(e.target.value) }} id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={handelLogin} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
