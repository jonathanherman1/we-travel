import React, { useState, useEffect } from 'react';

// Styles
import styles from './Inspiration.module.css'

// Components
import ImageCard from '../../components/ImageCard/ImageCard';

// Services
import * as inspirationService from '../../services/inspirationService'

//Data
import countryPics from '../../assets/data/countryPics';

function Inspiration(){
    const [backgroundImageObj, setBackgroundImageObj] = useState('')
    const APP_NAME = 'WE!_Travel'
    useEffect(() => {
       inspirationService.index()
        .then(unsplashImageObj => setBackgroundImageObj(unsplashImageObj))
    }, []);

    console.log("backgroundImage", backgroundImageObj);

    return (
        <div className={styles.container}>
            <img className={styles.unsplashImage} src={backgroundImageObj.response?.urls.regular} alt={backgroundImageObj.response?.alt_description} />
            <p>{backgroundImageObj.response?.description}</p>
            Photos by <a href={`https://unsplash.com/@${backgroundImageObj.response?.user.username}?utm_source=${APP_NAME}&utm_medium=referral`}>{backgroundImageObj.response?.user.name}</a> on <a href={`https://unsplash.com/?utm_source=${APP_NAME}&utm_medium=referral`}>Unsplash</a>
            {countryPics.map((countryPic, i) => (
                <ImageCard 
                    key={i}
                    countryPic={countryPic}
                />
            ))}
        </div>
    )
}

export default Inspiration