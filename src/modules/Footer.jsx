import React from 'react'

export const Footer = () => {
    return (
        <section className="footer">
            <div className="wrapper">
                <div className="footer-content-top">
                    <div className="footer-content">
                        <ul>
                            <li className="footer-container-heading">About</li>
                            <li><a href="#">Who are we?</a></li>
                            <li><a href="#">Our commitment</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li className="footer-container-heading empty"></li>
                            <li><a href="#">Superprof around the world</a></li>
                            <li><a href="#">All Subjects</a></li>
                            <li><a href="#">Online classNamees</a></li>
                            <li><a href="#">States</a></li>
                            <li><a href="#">Superprof recruits</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li className="footer-container-heading">Join the adventure</li>
                            <li><a href="#">The Superprof Blog</a></li>
                        </ul>

                    </div>
                    <div className="footer-content">
                        <ul>
                            <li className="footer-container-heading">Help</li>
                            <li><a href="#">Need help?</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <ul className="">
                            <li className="footer-container-heading">Fllow us</li>
                            <div className="social-media-icons-container">
                                <li className="social-media-icons">
                                    <a href="#" className="fllow-btn"><span><i className="fa-brands fa-facebook-f"></i></span></a>
                                </li>
                                <li className="social-media-icons">
                                    <a href="#" className="fllow-btn"><span><i className="fa-brands fa-twitter"></i></span></a>
                                </li>
                                <li className="social-media-icons">
                                    <a href="#" className="fllow-btn"><span><i className="fa-brands fa-instagram"></i></span></a>
                                </li>

                            </div>
                        </ul>
                    </div>
                    <hr/>
                </div>
                <div className="footer-content-buttom">
                    <p className="copywrite-sec">&copy; 2023 Superprof, Explore. Learn</p>
                </div>
            </div>
        </section>

    )
}
