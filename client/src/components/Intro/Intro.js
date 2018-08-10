import React from "react";
// import "./Intro.css";

const Intro = () => (
     <div className="page-section clearfix">
        <div className="container">
            <div className="intro">
                <img className="img-fluid intro-img mb-3 mb-lg-0 rounded" src="assets/img/intro.jpeg" alt="flowers" />
                <div className="intro-text left-0 text-centerfaded p-5 rounded bg-faded text-center">
                    <h2 className="section-heading mb-4">
                        <span className="section-heading-upper">ABOUT</span>
                        <span className="section-heading-lower">POPUP THEORY</span>
                    </h2>
                    <p className="intro-paragraph mb-3">Every arrangement starts with locally sourced, hand picked flowers. When you walk into our shop, we are
                        dedicated to providing you with beautiful work, a welcoming atmosphere, and above all else, friendly
                        service.</p>
                </div>
            </div>
        </div>
    </div>

);

export default Intro;