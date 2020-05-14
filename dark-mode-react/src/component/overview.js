import React from 'react'
import './overview.css'
import CardSmall from './cardsmall'

const cardsmallData = [
    {
        key: 1,
        views: 'Page Views',
        icon: 'images/icon-facebook.svg',
        number: '87',
        percentage: 3
    },
    {
        key: 2,
        views: 'Likes',
        icon: 'images/icon-facebook.svg',
        number: '52',
        percentage: 2
    },
    {
        key: 3,
        views: 'Likes',
        icon: 'images/icon-instagram.svg',
        number: '5462',
        percentage: 2257
    },
    {
        key: 4,
        views: 'Profile Views',
        icon: 'images/icon-instagram.svg',
        number: '52k',
        percentage: 1375
    },
    {
        key: 5,
        views: 'Retweets',
        icon: 'images/icon-twitter.svg',
        number: '117',
        percentage: 303
    },
    {
        key: 6,
        views: 'Likes',
        icon: 'images/icon-twitter.svg',
        number: '507',
        percentage: 553
    },
    {
        key: 7,
        views: 'Page Views',
        icon: 'images/icon-youtube.svg',
        number: '107',
        percentage: -19
    },
    {
        key: 8,
        views: 'Total Views',
        icon: 'images/icon-facebook.svg',
        number: '1407',
        percentage: -12
    }
];

export default function Overview() {
    return (
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardsmallData.map(({key, views, icon, number, percentage}) => (
                            <CardSmall key={key} 
                                    views={views}
                                    icon={icon}
                                    number={number}
                                    percentage={percentage} />
                        ))
                    }
                </div>
            </div>
        </section>
        );
}