import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { httpsService1 } from "./api";

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        httpsService1({
            method: 'post',
            data: data,
            path: '/signUp',
            success: (v) => {
                navigate('/login')
            }
        })
    }

    // useEffect(() => {

    // }, [])
    return (
        <>

            <div class="row  d-flex justify-content-center">
                <div class="col-md-8 mb-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Sign up</h5>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body">

                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example1">Name</label>
                                            <input type="text"  {...register("name", { required: true })} id="form7Example1" class="form-control" />

                                        </div>
                                    </div>

                                </div>

                                {/* <!-- Text input --> */}




                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form7Example5">Email</label>
                                    <input type="email"  {...register("email", { required: true })} id="form7Example5" class="form-control" />

                                </div>
                                <div class="form-outline mb-4">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" {...register("password", { required: true })} class="form-control" id="exampleInputPassword1" />

                                </div>

                                {/* <!-- Number input --> */}
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form7Example6">Phone</label>
                                    <input type="number" {...register("mobileNumber", { required: true })} id="form7Example6" class="form-control" />

                                </div>

                                {/* <!-- Text input --> */}
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form7Example4">Address</label>
                                    <input type="text" {...register("address", { required: true })} id="form7Example4" class="form-control" />

                                </div>

                                <div class="form-outline mb-4">
                                    <label class="form-label me-5" for="form7Example4">Terms Condition</label>
                                    <input type="checkbox" value={true} {...register("termsCondition", { required: true })} id="form7Example4" class="me-5" />

                                </div>
                            </div>
                            <div className="text-center mb-5 mr-4 ">
                                {/* <Link to='/login'> */}
                                <button type="submit" className="btn btn-primary ">Submit</button>
                                {/* </Link> */}
                                {/*
                                <Link to={'/login'} className="p-2">  Login</Link> */}

                            </div>

                        </form>
                    </div>
                </div>


            </div >

        </>
    )
}
export default Signup
