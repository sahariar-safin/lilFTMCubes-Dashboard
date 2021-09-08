import React, { useContext } from 'react'
import '../../style/Home.css';
import logo from '../../assets/logo.svg';
import { UserContext } from '../../App';

function Navbar() {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-bg ">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            {user.email &&
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Log Out
                                    </a>
                                </li>}
                        </ul>
                        <div class="d-flex">

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
