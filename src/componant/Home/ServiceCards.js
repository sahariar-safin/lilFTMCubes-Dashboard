import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getDocuments } from '../../api/doucments';

function ServiceCards() {

    const [editable, setEditable] = useState(false);
    const [dep, setDep] = useState(null);

    const [service, setHeading] = useState([]);
    const [serviceText, setserviceText] = useState({

    });

    const handleEdit = async (e) => {
        e.preventDefault();
        const { data } = await axios.patch('https://salty-inlet-72802.herokuapp.com/documents/update/service', serviceText, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
            }
        })
        setDep(data);
        setEditable(false);
    }

    useEffect(async () => {
        const { data } = await getDocuments("service");
        setHeading(...data);
    }, [dep])

    return (
        <div className="">
            <div className="d-flex justify-content-between">
                <div className="title-bg">
                    <h3 className="title">Service Card</h3>
                </div>
                <button onClick={() => setEditable(!editable)} className="btn btn-light gTextColor">Edit</button>
            </div>
            <div className="pt-3">
                {editable
                    ? (
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input onChange={(e) => setserviceText({ ...serviceText, c1Title: e.target.value })} defaultValue={service.c1Title} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Short Description</label>
                                <textarea onChange={(e) => setserviceText({ ...serviceText, c1Des: e.target.value })} defaultValue={service.c1Des} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group mt-5">
                                <label htmlFor="">Title</label>
                                <input onChange={(e) => setserviceText({ ...serviceText, c2Title: e.target.value })} defaultValue={service.c2Title} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Short Description</label>
                                <textarea onChange={(e) => setserviceText({ ...serviceText, c2Des: e.target.value })} defaultValue={service.c2Des} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group mt-5">
                                <label htmlFor="">Title</label>
                                <input onChange={(e) => setserviceText({ ...serviceText, c3Title: e.target.value })} defaultValue={service.c3Title} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Short Description</label>
                                <textarea onChange={(e) => setserviceText({ ...serviceText, c3Des: e.target.value })} defaultValue={service.c3Des} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button onClick={(e) => handleEdit(e)} className="mt-2 btn btn-primary">Save</button>
                        </form>
                    )
                    : (
                        <>
                            <div className="card serviceCard mb-3">
                                <div className="card-body">
                                    <p className="gTextColor">{service.c1Title}</p>
                                    <p>{service.c1Des}</p>
                                </div>
                            </div>
                            <div className="card serviceCard mb-3">
                                <div className="card-body">
                                    <p className="gTextColor">{service.c2Title}</p>
                                    <p>{service.c2Des}</p>
                                </div>
                            </div>
                            <div className="card serviceCard mb-3">
                                <div className="card-body">
                                    <p className="gTextColor">{service.c3Title}</p>
                                    <p>{service.c3Des}</p>
                                </div>
                            </div>
                        </>)}
            </div>
        </div>
    )
}

export default ServiceCards
