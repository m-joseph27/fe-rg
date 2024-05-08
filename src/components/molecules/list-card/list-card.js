import React, { useState } from "react";
import './list-card.scss';
import Phone from '../../../assets/phone.png';
import Tag from '../../../assets/new-tag.svg';
import Point from '../../../assets/point.svg';
import { Rating } from 'react-simple-star-rating';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import Button from "../../atoms/button/button";

const ListCard = () => {
  const [ altImage, setAltImage ] = useState('unloved');
  const onClickBtnFav = () => {
    setAltImage('unloved')
  }

  const onClickBtnUnFav = () => {
    setAltImage('loved');
  }

  return (
    <>
      <div className="list-card">
        <div className="tag-image">
          <img src={Tag} alt="item-tag" />
        </div>
        <div>
          <p>In Stock</p>
        </div>
        <div className="img-phone">
          <img src={Phone} alt="phone" />
        </div>
        <div className="phone-name">
          <span>Samsung Galaxy S9 -Midnight Black 4/64 GB</span>
        </div>
        <div className="phone-desc">
          <div>
            <div className="phone-point">
              <img className="img-point" src={Point} />
              <span className="point">2000 Poins</span>
            </div>
            <div className="phone-review">
              <Rating size={15} readonly className="star" />
              <span>160 reviews</span>
            </div>
          </div>
          <div className="btn-favorite">
            {
                altImage === 'loved' ?
                <button onClick={onClickBtnFav}>
                  <FavButton />
                </button>
                :
                <button onClick={onClickBtnUnFav}>
                  <UnFavButton />
                </button>
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;