import React from 'react';
import style from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <>
        <div className={style.container}>
            <div className={style.search_field}>
                <input className={style.input} type="text" placeholder='type to search what you want'/>
            </div>
            
        </div>
        </>
    );
};

export default HeroSection;