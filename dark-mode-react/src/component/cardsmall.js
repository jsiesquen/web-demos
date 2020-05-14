import React from 'react'
import './cardsmall.css'

export default function CardSmall({views, icon, number, percentage}) {
    return (
        <div className="card-small">
            <p className="card-small-views">{views}</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{number}</p>
            <p className={`card-small-percentage ${percentage>=0?'':'is-danger'}`}>
                <span>
                    <img src={`images/icon-${percentage>=0?'up':'down'}.svg`} alt="" />
                    {Math.abs(percentage)}%
                </span>
            </p>
        </div>
    );
}