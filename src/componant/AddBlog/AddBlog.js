import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './AddBlog.css';

function AddBlog() {
    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar menu="addblog"></Sidebar>
                <div class="col-md-9 main-content">
                    <h1 class="text-center m-5">Create Blog</h1>
                    <div class="from-wrapper">
                        <form action="">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="title" placeholder="Title" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="description" placeholder="Description"></textarea>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="author" placeholder="Author" />
                            </div>

                            <input type="file" class="form-control" id="upload" aria-describedby="upload"
                                aria-label="Upload" />
                            <label for="upload">
                                <div class="upload">
                                    <p>Add Photos</p>
                                    <i class="fas fa-photo-video"></i>
                                </div>
                            </label>

                            <div class='text-center'>
                                <input type="submit" value="Create Blog" class="submit-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
