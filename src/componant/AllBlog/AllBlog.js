import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './AllBlog.css';

function AllBlog() {
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem, ipsum. </td>
                                    <td>4-12-2021</td>
                                    <td>Lorem, ipsum.</td>
                                    <td><img src="./img/upload-image-3276776-2743110.png" class="img-fluid" alt="" /></td>
                                    <td>
                                        <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem, ipsum. </td>
                                    <td>4-12-2021</td>
                                    <td>Lorem, ipsum.</td>
                                    <td><img src="./img/upload-image-3276776-2743110.png" class="img-fluid" alt="" /></td>
                                    <td>
                                        <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem, ipsum. </td>
                                    <td>4-12-2021</td>
                                    <td>Lorem, ipsum.</td>
                                    <td><img src="./img/upload-image-3276776-2743110.png" class="img-fluid" alt="" /></td>
                                    <td>
                                        <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem, ipsum. </td>
                                    <td>4-12-2021</td>
                                    <td>Lorem, ipsum.</td>
                                    <td><img src="./img/upload-image-3276776-2743110.png" class="img-fluid" alt="" /></td>
                                    <td>
                                        <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Lorem, ipsum. </td>
                                    <td>4-12-2021</td>
                                    <td>Lorem, ipsum.</td>
                                    <td><img src="./img/upload-image-3276776-2743110.png" class="img-fluid" alt="" /></td>
                                    <td>
                                        <button class="btn btn-success"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
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
