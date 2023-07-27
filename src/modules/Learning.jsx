import React from 'react'

export const Learning = () => {
    return (
        <section class="learning-section">
            <h1 class="video-sec-heading">Learning has never been this easy</h1>
            <div class="video-sec-body">
                <div class="video-sec-body-inner-card">
                    <div class="card-left">
                        <h1 class="card-heading">1.Search</h1>
                        <p class="desc">View the profiles freely and connect with your fantastic teacher according to your
                            criteria (prices, recommendations, reviews, classes at home or online)</p>
                    </div>
                    <div class="card-video-sec">
                        <video src="./videos/1.mov" class="card-video" muted autoplay loop></video>
                    </div>
                </div>
                <div class="video-sec-body-inner-card">
                    <div class="card-left">
                        <h1 class="card-heading">2.Contact</h1>
                        <p class="desc">Teachers will get back to you within hours! And if you can't find the perfect
                            teacher, our team is here to help.</p>
                    </div>
                    <div class="card-video-sec">
                        <video src="./videos/2.mov" class="card-video" muted autoplay loop></video>
                    </div>
                </div>
                <div class="video-sec-body-inner-card">
                    <div class="card-left">
                        <h1 class="card-heading">3.Organize</h1>
                        <p class="desc">Freely schedule your classes with your teacher from the messaging platform.</p>
                    </div>
                    <div class="card-video-sec">
                        <video src="./videos/3.mov" class="card-video" muted autoplay loop></video>
                    </div>
                </div>
            </div>


        </section>
    )
}
