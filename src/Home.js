import React, { useEffect, useState } from 'react';
import { httpsService } from './api';
import { Link, useNavigate } from 'react-router-dom';


const ListComponent = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        httpsService({
            method: 'get',

            path: '/admin/getAllUser',
            success: (v) => {
                setdata(v?.data)
            }
        })
    }, [])
    //////////////logout/////////////
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    // console.warn(user)
    function logout() {
        localStorage.clear();
        navigate('/login')
    }
    //////////////////////
    return (
        <div >
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <div title={user && user.name}>
                    <button className="navbar-brand" onClick={logout}>Logout</button>
                </div>


            </nav >
            <h1>User List</h1>
            <table className="table table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Provide Data</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Password</th>
                        <th scope="col">Status</th>
                        <th scope="col">Terms Condition</th>
                        <th scope="col">ProfileImage</th>
                        <th scope="col">Deleted Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">__v</th>
                        <th scope="col">Token</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item) => {
                            console.log('skjd', item)
                            return (
                                <>
                                    {/* <tr>
                                        <th scope="row" >{item?._id}</th>
                                        <td>{item?.status}</td>
                                        <td>{item?.message}</td>
                                        <td>{item?.data}</td>
                                    </tr> */}
                                    {
                                        item?.map((item) => {
                                            return (
                                                <>
                                                    <tr >
                                                        <th scope="row" > {item?._id} </th>
                                                        <td>{item?.providerData}</td>
                                                        <td>{item?.userId}</td>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.mobileNumber}</td>
                                                        <td>{item?.address}</td>
                                                        <td>{item?.password}</td>
                                                        <td>{item?.status}</td>
                                                        <td>{item?.termsCondition}</td>
                                                        <td>{item?.profileImage}</td>
                                                        <td>{item?.deletedStatus}</td>
                                                        <td>{item?.created_at}</td>
                                                        <td>{item?.updated_at}</td>
                                                        <td>{item?.__v}</td>
                                                        <td>{item?.token}</td>

                                                        {/* <td>{item?.status}</td>
                                                        <td>{item?.__v}</td>
                                                        <td>{item?.created_at}</td> */}


                                                    </tr>
                                                    <Link to={'/edit'}>
                                                        <button className="btn btn-primary">Edit</button>
                                                    </Link>
                                                    <br />
                                                </>
                                            )
                                        })
                                    }
                                    {/* <tr>
                                        <th scope="row">{item?._id}</th>
                                        <td>{item?.email}</td>


                                    </tr> */}
                                </>
                            )
                        })
                    }


                </tbody>
            </table>
            {/* <ul>
                {data.map(user => (
                    <li key={user._id}>
                        <strong>Name:</strong> {user.name}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Mobile Number:</strong> {user.mobileNumber}<br />
                        <strong>Address:</strong> {user.address}<br />
                        <strong>password:</strong> {user.password}<br />
                        <strong>status:</strong> {user.status}<br />
                        <strong>termsCondition:</strong> {user.termsCondition}<br />
                        <strong>ProfileImage :</strong> {user.profileImage}<br />
                        <strong>DeleteStatus:</strong> {user.deletedStatus}<br />
                        <button type="button" class="btn btn-primary">Edit</button>


                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ListComponent;
