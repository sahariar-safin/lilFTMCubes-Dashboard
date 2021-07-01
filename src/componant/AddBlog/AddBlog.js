import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './AddBlog.css';

function AddBlog() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [img, setImg] = useState('');
    const onSubmit = async blogData => {
        blogData.imgURL = img;
        console.log(img, blogData)
        const blog = await axios.post("https://salty-shore-60213.herokuapp.com/blog/", blogData);
        document.getElementById("blogForm").reset();
    };

    const handleImgUplodad = async (e) => {
        document.getElementById("submitBtn").setAttribute("disabled", "disabled")
        document.getElementById("submitBtn").value = "Uploading Image!"
        const imgData = new FormData();
        imgData.set("key", "5cc92beddf63f7dc55cb81cb7d04e498")
        imgData.append('image', e.target.files[0]);
        const { data } = await axios.post("https://api.imgbb.com/1/upload", imgData);
        setImg(data.data.display_url);
        document.getElementById("submitBtn").removeAttribute("disabled");
        document.getElementById("submitBtn").value = "Create Blog";
    }



    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar menu="addblog"></Sidebar>
                <div class="col-md-9 main-content">
                    <h1 class="text-center m-5">Create Blog</h1>
                    <div class="from-wrapper">
                        <form id="blogForm" onSubmit={handleSubmit(onSubmit)} action="">
                            <div class="mb-3">
                                <input {...register("title", { required: true })} type="text" class="form-control" id="title" placeholder="Title" />
                            </div>
                            <div class="mb-3">
                                <textarea {...register("description", { required: true })} class="form-control" id="description" placeholder="Description"></textarea>
                            </div>
                            <div class="mb-3">
                                <input {...register("author", { required: true })} type="text" class="form-control" id="author" placeholder="Author" />
                            </div>

                            <input {...register("imgURL", { required: true })} onChange={(e) => handleImgUplodad(e)} type="file" class="form-control" id="upload" aria-describedby="upload"
                                aria-label="Upload" />
                            <label for="upload">
                                <div class="upload">
                                    <p>Add Photos</p>
                                    <i class="fas fa-photo-video"></i>
                                </div>
                            </label>

                            <div class='text-center'>
                                <input type="submit" id="submitBtn" value="Create Blog" class="submit-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
