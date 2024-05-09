import React, { useState } from 'react';
import './index.scss';
import NavigationBar from '../../molecules/navbar/navbar';
import Phone from '../../../assets/phone-removebg.png';
import Tag from '../../../assets/hot-item-tag.svg';
import Point from '../../../assets/point.svg';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import { Rating } from 'react-simple-star-rating';
import Button from '../../atoms/button/button';

const PageDetailList = () => {
  let [ count, setCount ] = useState(1);
  const [ disabled, setDisabled ] = useState(true);
  const [ altImage, setAltImage ] = useState('unloved');

  const onClickBtnFav = () => {
    setAltImage('unloved')
  }

  const onClickBtnUnFav = () => {
    setAltImage('loved');
  }

  const increment = () => {
    setCount(
      count + 1
    );
    if (count === 1) {
      setDisabled(false);
    }
  }

  const decrement = () => {
    setCount(
      count - 1,
    );
    if (count === 2) {
      setDisabled(true)
    }
  }

  return (
    <>
      <div className="detail-page">
        <div className="product">
          <div className="tag-product">
            <span>{`List Product > `}<span>{`Samsung Galaxy s9`}</span> </span>
          </div>
          <div className="content">
            <div className="phone-image">
              <div className="tag-image">
                <img src={Tag} alt="item-tag" />
              </div>
              <div className="product-image">
                <img src={Phone} alt="phone" />
              </div>
            </div>
            <div className="desc-product">
              <div className="phone-name"><span>Samsung Galaxy S9 - Midnight Black 4/64 GB</span></div>
              <div className="phone-review">
                <Rating size={18} readonly className="star" />
                <span>160 reviews</span>
              </div>
              <div className="point">
                <img className="img-point" src={Point} alt="point" />
                <span>2000.000 Poins</span>
                <span className="stock">In Stock</span>
              </div>
              <div className="description">
                <span>Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)</span>
              </div>
              <div className="count-section">
                <span className="count">Jumlah</span>
                <div class="counter">
                  <button disabled={disabled} onClick={decrement} className="calculation">-</button>
                  <button class="number">{count}</button>
                  <button onClick={increment} className="calculation">+</button>
                </div>
              </div>
              <div className="btn-product">
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
                <Button type={'primary'} text={'Redeem'} />
                <Button type={'secondary'} text={'Add to cart'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageDetailList;