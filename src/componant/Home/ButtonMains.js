import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getDocuments } from '../../api/doucments';

function ButtonMains() {

    const [editable, setEditable] = useState(false);
    const [dep, setDep] = useState(null);

    const [button, setHeading] = useState([]);
    const [buttonText, setbuttonText] = useState({

    });

    const handleEdit = async (e) => {
        e.preventDefault();
        const { data } = await axios.patch('http://localhost:5000/documents/update/buttonMain', buttonText, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
            }
        })
        setDep(data);
        setEditable(false);
    }

    useEffect(async () => {
        const { data } = await getDocuments("buttonMain");
        setHeading(...data);
    }, [dep])

    return (
        <div className="pt-5">
            <div className="d-flex justify-content-between">
                <div className="title-bg">
                    <h3 className="title">Buttons Main</h3>
                </div>
                <button onClick={() => setEditable(!editable)} className="btn btn-light gTextColor">Edit</button>
            </div>
            <div className="pt-3">
                {editable
                    ? (
                        <form action="">
                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input onChange={(e) => setbuttonText({ ...buttonText, button1: e.target.value })} defaultValue={button.button1} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input onChange={(e) => setbuttonText({ ...buttonText, button2: e.target.value })} defaultValue={button.button2} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                            </div>
                            <button onClick={(e) => handleEdit(e)} className="mt-2 btn btn-primary">Save</button>
                        </form>
                    )
                    : (
                        <div className="d-flex">
                            <button className="btn btn-light me-3">{button.button1}</button>
                            <button className="btn btn-light">{button.button2}</button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ButtonMains
