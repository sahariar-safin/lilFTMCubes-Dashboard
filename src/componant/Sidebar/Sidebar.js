import './Sidebar.css';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Sidebar({ menu }) {

    return (
        <div class="col-md-3 sidebar">
            <ul class="side-menu list-unstyled">
                <li class={menu === "addblog" && 'active'}>
                    <div class="icon"><i class="fas fa-edit"></i></div> <Link to="/addblog">Create Blog</Link>
                </li>
                <li class={menu === "allblog" && 'active'}>
                    <div class="icon"><i class="fas fa-newspaper"></i></div><Link to="/allblog">All blog</Link>
                </li>
                <li class={menu === "massage" && 'active'}>
                    <div class="icon"><i class="fas fa-comment-alt"></i></div><Link to="/massage">Massage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
