import axios from 'axios';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Massage.css';

function Massage() {

    const [Massages, setMassages] = useState([]);
    const [DeletedMassage, setDeletedMassage] = useState(null);

    useEffect(async () => {
        const { data } = await axios.get("https://salty-shore-60213.herokuapp.com/massage/");

        setMassages(data);
    }, [DeletedMassage]);

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`https://salty-shore-60213.herokuapp.com/massage/${ id }`);

        setDeletedMassage(data);
    }

    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar menu="massage"></Sidebar>
            </div>
            <div className="col-md-9 main-content">
                <h1 className="text-center p-5 ">Massages</h1>
                <div class="m-3">
                    {Massages.map((massage, index) => (
                        <div className="blog-wrapper m-3">
                            <h5>{massage.name}</h5>
                            <p>{dateFormat(massage.createAt, "mmmm dS, yyyy")}</p>
                            <h6>Email: {massage.email}</h6>
                            <h6>Phone: {massage.phone}</h6>
                            <h6>Project Description:</h6>
                            <p>{massage.massage}</p>
                            <div className="d-flex justify-content-end">
                                <button onClick={() => handleDelete(massage._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Massage
