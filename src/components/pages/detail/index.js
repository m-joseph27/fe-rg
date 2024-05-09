import React, { useState, useEffect } from 'react';
import './index.scss';
import Phone from '../../../assets/phone-removebg.png';
import Tag from '../../../assets/hot-item-tag.svg';
import Point from '../../../assets/point.svg';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import { Rating } from 'react-simple-star-rating';
import Button from '../../atoms/button/button';
import { useNavigate, useParams } from 'react-router-dom';
import GetDetailItem from '../../../services/items';

const PageDetailList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let [ count, setCount ] = useState(1);
  const [ disabled, setDisabled ] = useState(true);
  const [ altImage, setAltImage ] = useState('unloved');
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const result = await GetDetailItem(`/${id}`);
        console.log('data', result.data.data);
        setData(result.data.data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchDataFromServer();
  }, []);

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

  const onBackButtonClicked = () => {
    navigate('/')
  }

  return (
    <>
      <div className="detail-page">
        <div className="product">
          <div className="tag-product">
            <button onClick={onBackButtonClicked}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <span>{`List Product > `}<span>{`Samsung Galaxy s9`}</span> </span>
          </div>
          <div className="content">
            <div className="phone-image">
              <div className="tag-image">
                <img src={Tag} alt="item-tag" />
              </div>
              <div className="product-image">
                <img src={ data.attributes?.images[0] } alt="phone" />
              </div>
            </div>
            <div className="desc-product">
              <div className="phone-name"><span>{ data.attributes?.name }</span></div>
              <div className="phone-review">
                <Rating size={18} readonly className="star" />
                <span>{ data.attributes?.numOfReviews + ' reviews' }</span>
              </div>
              <div className="point">
                <img className="img-point" src={Point} alt="point" />
                <span>{ data.attributes?.points + ' Poins' }</span>
                <span className="stock">In Stock</span>
              </div>
              <div className="description">
                <div className="text" dangerouslySetInnerHTML={{ __html: data.attributes?.info }} />
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
        <div className="label-info">
          <span>Info Produk</span>
          <hr />
          <div className="specification">
            <span className="label-detail">Rincian</span>
            <div className="spec-detail">
              <span dangerouslySetInnerHTML={{ __html: data.attributes?.description }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageDetailList;