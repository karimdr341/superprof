import React from 'react'

export const Learning = () => {
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
                        <video src="./videos/1.mov" className="card-video" muted autoplay loop></video>
                    </div>
                </div>
                <div className="video-sec-body-inner-card">
                    <div className="card-left">
                        <h1 className="card-heading">2.Contact</h1>
                        <p className="desc">Teachers will get back to you within hours! And if you can't find the perfect
                            teacher, our team is here to help.</p>
                    </div>
                    <div className="card-video-sec">
                        <video src="./videos/2.mov" className="card-video" muted autoplay loop></video>
                    </div>
                </div>
                <div className="video-sec-body-inner-card">
                    <div className="card-left">
                        <h1 className="card-heading">3.Organize</h1>
                        <p className="desc">Freely schedule your classNamees with your teacher from the messaging platform.</p>
                    </div>
                    <div className="card-video-sec">
                        <video src="./videos/3.mov" className="card-video" muted autoplay loop></video>
                    </div>
                </div>
            </div>


        </section>
    )
}
