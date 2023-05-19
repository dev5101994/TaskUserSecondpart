import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { httpsService1 } from "./api";
function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        httpsService1({
            method: 'post',
            data: data,
            path: '/login',
            success: (v) => {
                // navigate('/')
                navigate('/home')
                let token = v?.data?.map((i) => i?.token)
                localStorage.setItem('token', token)
            }
        })
    }
    return (
        <div className="container">
            <div class="row  d-flex justify-content-center mt-5">
                <div class="col-md-8 mb-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Login</h5>
                        </div>

                        <form className="mt-5 mx-5" onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">

                                <input type="email" {...register("email", { required: true })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                            </div>
                            <br />
                            <div class="form-group">

                                <input type="password" {...register("password", { required: true })} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">

                            </div>
                            <div className="">
                                {/* <Link to='/Home'> */}
                                <button type="submit" class="btn btn-primary mb-5">Submit</button>
                                {/* </Link> */}
                                <Link to={'/signup'} className="p-4 ">   Register</Link>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
