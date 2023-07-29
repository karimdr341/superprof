import React from 'react'
import "../css/Learning.css"
import vid1 from '../assets/videos/1.mov'
import vid2 from '../assets/videos/2.mov'
import vid3 from '../assets/videos/3.mov'
 const Learning = () => {
    return (
        <section className="learning-section">
            <h1 className="video-sec-heading">Learning has never been this easy</h1>
            <div className="video-sec-body">
                <div className="video-sec-body-inner-card">
                    <div className="card-left">
                        <h1 className="card-heading">1.Search</h1>
                        <p className="desc">View the profiles freely and connect with your fantastic teacher according to your
                            criteria (prices, recommendations, reviews, classNamees at home or online)</p>
                    </div>
                    <div className="card-video-sec">
                        <video src={vid1} className="card-video" muted autoPlay loop></video>
                    </div>
                </div>
                <div className="video-sec-body-inner-card">
                    <div className="card-left">
                        <h1 className="card-heading">2.Contact</h1>
                        <p className="desc">Teachers will get back to you within hours! And if you can't find the perfect
                            teacher, our team is here to help.</p>
                    </div>
                    <div className="card-video-sec">
                        <video src={vid2} className="card-video" muted autoPlay loop></video>
                    </div>
                </div>
                <div className="video-sec-body-inner-card">
                    <div className="card-left">
                        <h1 className="card-heading">3.Organize</h1>
                        <p className="desc">Freely schedule your classNamees with your teacher from the messaging platform.</p>
                    </div>
                    <div className="card-video-sec">
                        <video src={vid3} className="card-video" muted autoPlay loop></video>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Learning