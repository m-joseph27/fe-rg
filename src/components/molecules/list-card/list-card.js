import React, { useState } from "react";
import './list-card.scss';
import Phone from '../../../assets/phone-removebg.png';
import Tag from '../../../assets/new-tag.svg';
import Point from '../../../assets/point.svg';
import { Rating } from 'react-simple-star-rating';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import Button from "../../atoms/button/button";

const ListCard = () => {
  const [ altImage, setAltImage ] = useState('unloved');
  const [ stock, setStock ] = useState(5);
  const [ soldOut, setSoldOut ] = useState(false);
  const [ isHovered, setIsHovered ] = useState(false);

  const onClickBtnFav = () => {
    setAltImage('unloved')
  }

  const onClickBtnUnFav = () => {
    setAltImage('loved');
  }
  
  const onMouseEnter = () => {
    if (!soldOut) {
      console.log('here');
      setIsHovered(true);
    }
  }

  const onMouseLeave = () => {
    if (!soldOut) {
      console.log('leave');
      setIsHovered(false);
    }
  }

  return (
    <>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={isHovered ? "hovered-list-card" : "list-card"}>
      {
        isHovered &&
        <div>
          <div className='hovered-item-ready'>
            <div className="hovered-stock">
              {
                soldOut ?
                <span className="item-sold-out">Sold Out</span>
                :
                <>
                  {
                    stock > 5 ? <span className="in-stock">In Stock</span> : <span className="under-stock">{`Stock < 5`}</span>
                  }
                </>
              }
            </div>
            <div className="hovered-img-phone">
              {
                soldOut ?
                <img className={soldOut ? 'img-sold' : ''} src={Phone} alt="phone" />
                :
                <img src={Phone} alt="phone" />
              }
            </div>
            <div className="hovered-phone-desc">
              <div className="phone-name">
                <span>Samsung Galaxy S9 -Midnight Black 4/64 GB</span>
              </div>
              <div className="btn-detail">
                <Button type={'detail'} text={'View detail'} />
              </div>
              <div className="btn-favorite">
                {
                  altImage === 'loved' ?
                  <button disabled={soldOut} onClick={onClickBtnFav}>
                    <FavButton />
                  </button>
                  :
                  <button disabled={soldOut} onClick={onClickBtnUnFav}>
                    <UnFavButton />
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      }
      {
        !isHovered &&
        <div className={soldOut ? 'sold-out' : 'item-ready' }>
          <div className="tag-image">
            {
              soldOut ?
              <></>
              :
              <img src={Tag} alt="item-tag" />
            }
          </div>
          <div className="stock">
            {
              soldOut ?
              <span className="item-sold-out">Sold Out</span>
              :
              <>
                {
                  stock > 5 ? <span className="in-stock">In Stock</span> : <span className="under-stock">{`Stock < 5`}</span>
                }
              </>
            }
          </div>
          <div className="img-phone">
            {
              soldOut ?
              <img className={soldOut ? 'img-sold' : ''} src={Phone} alt="phone" />
              :
              <img src={Phone} alt="phone" />
            }
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
                <button disabled={soldOut} onClick={onClickBtnFav}>
                  <FavButton />
                </button>
                :
                <button disabled={soldOut} onClick={onClickBtnUnFav}>
                  <UnFavButton />
                </button>
              }
            </div>
          </div>
        </div>
      }
      </div>
    </>
  );
}

export default ListCard;