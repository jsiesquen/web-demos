import React from 'react'
import './card.css'

function Card({accountName, followers, icon, today, socialnetwork}) {
    return (
        <article className={`card ${socialnetwork}`}>
            <p className="card-title">
                <img src={icon} alt="" />
                {accountName}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className={`card-today ${today>=0?'':'is-danger'}`}>
                <img src={`images/icon-${today>=0?'up':'down'}.svg`} alt="" />
                {Math.abs(today)} Today
            </p>
        </article>
    );
}

export default Card