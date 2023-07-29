import React from 'react'

const Profile_card = ({prof}) => {
    // console.log(prof)
    return (
        <li className="profile-card">
            <div className="profile-header">
                <img src={prof.imageUrl}
                    className="avater" alt="" />
                <div className="profile-details">
                    <p className="prof-name">{prof.name}</p>
                    <p className="subject-name">{prof.subject}</p>
                    <p className="rating"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </p>
                </div>
            </div>
            <div className="profile-desc">
               {prof.desc}
            </div>
            <p className="reviewer">{prof.reviewer}</p>
        </li>
    )
}


export default Profile_card