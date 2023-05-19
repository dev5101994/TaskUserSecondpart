import React from "react"
import { Link } from "react-router-dom"

function Edit() {

    return (
        <>
            <div class="row  d-flex justify-content-center">
                <div class="col-md-8 mb-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Edit</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <input type="text" id="form7Example1" class="form-control" />
                                            <label class="form-label" for="form7Example1">Name</label>
                                        </div>
                                    </div>

                                </div>

                                {/* <!-- Text input --> */}
                                <div class="form-outline mb-4">
                                    <input type="text" id="form7Example3" class="form-control" />
                                    <label class="form-label" for="form7Example3">Company name</label>
                                </div>



                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-4">
                                    <input type="email" id="form7Example5" class="form-control" />
                                    <label class="form-label" for="form7Example5">Email</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                    <label for="exampleInputPassword1">Password</label>
                                </div>

                                {/* <!-- Number input --> */}
                                <div class="form-outline mb-4">
                                    <input type="number" id="form7Example6" class="form-control" />
                                    <label class="form-label" for="form7Example6">Phone</label>
                                </div>

                                {/* <!-- Text input --> */}
                                <div class="form-outline mb-4">
                                    <input type="text" id="form7Example4" class="form-control" />
                                    <label class="form-label" for="form7Example4">Address</label>
                                </div>


                            </form>
                        </div>
                        <div className="align-self-center mb-5 mr-4 ">
                            <button type="button" className="btn btn-primary ">Submit</button>


                            {/* <Link to={'/login'} className="p-2">  Login</Link> */}

                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Edit