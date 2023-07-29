import React from 'react'
import '../css/Certificate.css'
// import images from '../assets/images/'
var images="../assets/images";
const Certificate = () => {
    return (
        <section className="certificate-section">

            <div className="certificate-left">
                <h1 className="certificate-heading">Certified and Qualified<br />
                    teachers</h1>
                <p className="certificate-quote"><span>Over one million students</span> gave a review of</p>
                <p className="certificate-quote"><span>5 stars</span> to their teacher!</p>
                <a href='/' className="teacher-finder-2">
                    <span>Find a teacher</span>
                </a>
            </div>

            <div className="cards">
                <div className="card-wraper">
                    <ul className="profs-card-1 prof-cards">
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/chartered-accountant-profession-having-rich-practical-experience-group-wise-final-level-have-scored-marks.jpg`}
                                    className="avater" alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Omkar</p>
                                    <p className="subject-name">Accounting teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                Sir is very diligent and systematic in his way of teaching, I am a second year student and
                                was
                                unaware on how to approach my vast syllabus, however with proper breakdown of tasks,...
                            </div>
                            <p className="reviewer">Zenia 3 days ago</p>
                        </li>
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/train-students-effectively-you-need-polite-patient-and-understand-their-needs-make-your-students-perfect-driving.jpg`}
                                    className="avater" alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Srini</p>
                                    <p className="subject-name">Driving teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                Srini is very good human being. He has lot of patience. He has awesome driving skills. I got
                                confidence in just two days. My fear of driving has gone. He gave very good tips which...
                            </div>
                            <p className="reviewer">Makarand 3 days ago</p>
                        </li>
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/all-dgca-cpl-subjects-will-taught-here-english-according-the-latest-dgca-syllabus-one-demo-className-available-for-free.jpg`}
                                    className="avater" alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Chaitanya</p>
                                    <p className="subject-name">Aviation teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                Good in demonstration and patience in solving queries,Excellent knowledge in subject
                            </div>
                            <p className="reviewer">Balagam 4 days ago</p>
                        </li>
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/learn-drive-your-own-and-independent-your-life-nine-five-nine-zero-seven-nine-zero-six-seven-zero.jpg`}
                                    className="avater" alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Sanjay</p>
                                    <p className="subject-name">Driving teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                I am now able to take the car to my office, drive through the traffic, parking. I thought it
                                would take months for me to drive my car by myself in Bangalore traffic, all thanks to...
                            </div>
                            <p className="reviewer">Rohit 4 days ago</p>
                        </li>
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/revitalize-your-body-and-mind-nurture-your-body-refresh-your-mind-and-ignite-your-spirit.jpg`}
                                    className="avater" alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Divya</p>
                                    <p className="subject-name">Yoga teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                I had the pleasure of meeting Divya at Health Ville, a naturopathy center in Bhubaneswar,
                                before
                                the COVID-19 pandemic. Impressed by her skills, I decided to invite her to provide...
                            </div>
                            <p className="reviewer">Annada 4 days ago</p>
                        </li>
                        <li className="profile-card">
                            <div className="profile-header">
                                <img src={`${images}/profiles/would-love-students-relaxed-and-stress-free.jpg`} className="avater"
                                    alt="" />
                                <div className="profile-details">
                                    <p className="prof-name">Ananta</p>
                                    <p className="subject-name">Positive thinking teacher</p>
                                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </p>
                                </div>
                            </div>
                            <div className="profile-desc">
                                I have taken 5 sessions from her so far. She has been punctual, flexible and professional.
                                She
                                is knowledgeable and is a good listener. Would definitely recommend her for your...
                            </div>
                            <p className="reviewer">Sai 4 days ago</p>
                        </li>

                    </ul >
                </div>


            </div >

        </section >
    )
}

export default Certificate;