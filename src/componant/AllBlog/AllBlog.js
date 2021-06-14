import axios from 'axios';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './AllBlog.css';

function AllBlog() {

    const [Blogs, setBlogs] = useState([]);
    const [DeletedBlog, setDeletedBlog] = useState(null)

    useEffect(async () => {
        const { data } = await axios.get("https://salty-shore-60213.herokuapp.com/blog/");

        setBlogs(data);
    }, [DeletedBlog]);

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`https://salty-shore-60213.herokuapp.com/blog/${ id }`)

        setDeletedBlog(data);
    }

    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar menu="allblog" />
                <div class="col-md-9 main-content">
                    <h1 class="text-center m-5">All Blogs</h1>
                    <div class="blog-wrapper">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Blog</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Blogs.map((blog, index) => (
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{blog.title}</td>
                                        <td>{dateFormat(blog.createAt, "mmmm dS, yyyy")}</td>
                                        <td>{blog.author}</td>
                                        <td><img src={blog.imgURL} width="100px" height="100px" class="img-fluid" alt="" /></td>
                                        <td>
                                            <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                            <button onClick={() => handleDelete(blog._id)} class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                                {/* <!-- Last tr use as table footer as like design --> */}
                                <tr>
                                    <td colspan="5">
                                        <div class="dropdown">
                                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Raw per page 10
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Raw per page 10</a></li>
                                                <li><a class="dropdown-item" href="#">Raw per page 20</a></li>
                                                <li><a class="dropdown-item" href="#">Raw per page 30</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td>
                                        <i class="fas fa-chevron-left me-4"></i>
                                        <i class="fas fa-chevron-right ms-4"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlog
