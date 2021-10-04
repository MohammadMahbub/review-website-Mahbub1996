import React from 'react';

const Footer = () => {
    return (
        <div>
            <section id="footer-area">
                <section className="container" id="footer-container">
                    <div className="row footer-height">
                        <div className="col-md-3 col-lg-4 d-flex align-items-center">
                            <p>Millions of people of all ages and from around
                            the world are improving their lives with us</p>
                        </div>
                
                        <div className="offset-lg-2"></div>
                
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link ">
                                <li className="link-heading">Course</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link">
                                <li className="link-heading">Terms</li>
                                <li>About School</li>
                                <li>Site Of Business</li>
                                <li>Need More Time</li>
                                <li>A Single Day Learning</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link">
                                <li className="link-heading">Useful Link</li>
                                <li>Click Graphic Link</li>
                                <li>Click Web Link</li>
                                <li>Click Business</li>
                                <li>Click Marketing Link</li>
                                <li>Click Engineering</li> 
                            </ul>
                        </div>
                    </div>
                    <footer>
                        <p>Copyright by © digital online school in 2021 </p>
                        <br />
                    </footer>
                </section>
            </section>
        </div>
    );
};

export default Footer;