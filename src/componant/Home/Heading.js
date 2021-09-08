import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getDocuments } from '../../api/doucments';

function Heading() {

    const [editable, setEditable] = useState(false);
    const [dep, setDep] = useState(null);

    const [heading, setHeading] = useState([]);
    const [headingText, setHeadingText] = useState({

    });

    const handleEdit = async (e) => {
        e.preventDefault();
        const { data } = await axios.patch('https://salty-inlet-72802.herokuapp.com/documents/update/heading', headingText, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
            }
        })
        setDep(data);
        setEditable(false);
    }

    useEffect(async () => {
        const { data } = await getDocuments("heading");
        setHeading(...data);
    }, [dep])

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="title-bg">
                    <h3 className="title">Heading</h3>
                </div>
                <button onClick={() => setEditable(!editable)} className="btn btn-light gTextColor">Edit</button>
            </div>
            <div className="pt-3">
                {editable
                    ? <form action="">
                        <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input onChange={(e) => setHeadingText({ ...headingText, title: e.target.value })} defaultValue={heading.title} className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Short Description</label>
                            <textarea onChange={(e) => setHeadingText({ ...headingText, des: e.target.value })} defaultValue={heading.des} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button onClick={(e) => handleEdit(e)} className="mt-2 btn btn-primary">Save</button>
                    </form>
                    : (
                        <>
                            <h1 className="fs-5">{heading.title}</h1>
                            <p className="fs-5">{heading.des}</p>
                        </>
                    )}

            </div>
        </div>
    )
}

export default Heading
