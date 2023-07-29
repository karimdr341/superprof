import React, { useEffect, useState } from 'react'
import '../css/Certificate.css'
// import images from '../assets/images/'
import ProfileCard from "../modules/Profile_card.jsx"
import json from '../assets/jsons/profile.json'
const Certificate = () => {
    const [profile, setProfile] = useState("")
    useEffect(() => {
        setProfile(json)
    }, [])
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

                        {/* <Profile_card imageUrl="googlr.com" name="Mizanur" subject="Math" desc={desc} reviewer="Rejuwanul" /> */}
                        {profile &&
                            profile.map((data) => {
                                return (
                                    <ProfileCard prof={data} key={data.id} />
                                )
                            })
                        }
                    </ul >
                </div>


            </div >

        </section >
    )
}

export default Certificate;