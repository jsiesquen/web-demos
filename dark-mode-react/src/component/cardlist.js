import React from 'react'
import './cardlist.css'
import Card from './card'

const cardlistData = [
    {
        id: 123,
        accountName: "@azulado",
        icon: "images/icon-facebook.svg",
        socialnetwork: "facebook",
        followers: '478',
        today: 12
    },
    {
        id: 345,
        accountName: "@jsiesquen",
        icon: "images/icon-twitter.svg",
        socialnetwork: "twitter",
        followers: '378',
        today: 3
    },
    {
        id: 34,
        accountName: "@jsiesquen",
        icon: "images/icon-instagram.svg",
        socialnetwork: "instagram",
        followers: '141',
        today: -5
    },
    {
        id: 64,
        accountName: "@yuanmiau",
        icon: "images/icon-youtube.svg",
        socialnetwork: "youtube",
        followers: '2',
        today: 1
    }
];

export default function CardList() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardlistData.map(cardData => (
                            <Card key={cardData.id} {...cardData} />
                        ))
                    }
                </div>
            </div>
        </section>
        );
}