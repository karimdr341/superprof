import React from 'react'

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1 className="heading">Find the<br/>
                    perfect teacher</h1>
                <p className="quote-1">Online or face-to-face,</p>
                <p className="quote-2">Choose from <span>24 million teachers</span></p>
                <div className="course-finder">
                    <div className="book-svg">
                        <label htmlFor="finder-quote" className="finder-quote">What do you want to learn?</label>
                    </div>
                    <a className="teacher-finder">
                        <span>Find a teacher</span>
                    </a>
                    <button className="nav-teacher-finder">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>

            </div>
            <div className="hero-profiles">
                <div className="profiles" style="--prof-img:../../images/prof-maths.jpg;">
                    <span className="profs">
                        <p className="prof-name">Avinash</p>
                        <p className="subject-name">Math Teacher</p>

                        <div className="rating">
                            <p>⭐</p>
                            <p>5</p>
                            <p>(30)</p>

                        </div>
                    </span>
                </div>
                <div className="profiles" style="--prof-img:../../images/prof-yoga.jpg;"> <span className="profs">
                    <p className="prof-name">Manisah</p>
                    <p className="subject-name">Yoga Teacher</p>

                    <div className="rating">
                        <p>⭐</p>
                        <p>4.9</p>
                        <p>(20)</p>

                    </div>
                </span></div>
                <div className="profiles" style="--prof-img:../../images/prof-hindi.jpg;"> <span className="profs">
                    <p className="prof-name">Karuna</p>
                    <p className="subject-name">Hindi Teacher</p>

                    <div className="rating">
                        <p>⭐</p>
                        <p>4.9</p>
                        <p>(18)</p>

                    </div>
                </span></div>
                <div className="profiles" style="--prof-img:../../images/prof-singing.jpg;"> <span className="profs">
                    <p className="prof-name">Payel</p>
                    <p className="subject-name">Singing Teacher</p>

                    <div className="rating">
                        <p>⭐</p>
                        <p>5</p>
                        <p>(60)</p>

                    </div>
                </span></div>
            </div>
        </section>
    )
}
