import React from 'react';
import style from './ItemCard.module.css'
const ItemCard = (props) => {
    return (
        <div className={style.card_container}>
            <div className={style.image_container}></div>

            <div className={style.info_container}>
                <div className={style.name_field}></div>
                <div className={style.description_field}></div>
            </div>

            <div className={style.pricing_container}>
                <div className={style.price}></div>
                
                {/* button */}
            </div>
        </div>
    );
};

export default ItemCard;