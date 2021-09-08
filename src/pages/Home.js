import React, { useState } from 'react'
import ButtonMains from '../componant/Home/ButtonMains';
import Buttons from '../componant/Home/Buttons';
import Heading from '../componant/Home/Heading';
import Navbar from '../componant/Home/Navbar';
import ServiceCards from '../componant/Home/ServiceCards';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <Heading />
                        <Buttons />
                        <ButtonMains />
                    </div>
                    <div className="col-md-6">
                        <ServiceCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
