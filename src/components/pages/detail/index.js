import React, { useState, useEffect } from 'react';
import './index.scss';
import HotItem from '../../../assets/hot-item-tag.svg';
import BestSeller from '../../../assets/best-seller-tag.svg';
import NewItem from '../../../assets/new-tag.svg';
import Point from '../../../assets/point.svg';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import Button from '../../atoms/button/button';
import { useNavigate, useParams } from 'react-router-dom';
import GetDetailItem from '../../../services/items';
import StarRatings from "react-star-ratings";

const PageDetailList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ count, setCount ] = useState();
  const [ disabled, setDisabled ] = useState(true);
  const [ incrementDisabled, setIncrementDisabled ] = useState();
  const [ altImage, setAltImage ] = useState('unloved');
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ rating, setRating ] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchDataFromServer = async () => {
      try {
        const result = await GetDetailItem(`/gifts/${id}`);
        setLoading(false);
        setData(result.data.data);
        result.data.data.attributes.stock === 0 ? setCount(0) : setCount(1);
        result.data.data.attributes.stock === 0 ? setIncrementDisabled(true) : setIncrementDisabled(false);
        roundedStar(result.data.data.attributes.rating);
      } catch (error) {
        setLoading(false);
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

  const roundedStar = (rating) => {
    const roundedRating = Math.round(rating * 2) / 2;

    setRating(roundedRating);
  }

  return (
    <div className="detail-item-page">
    {
      loading ? (
        <h2 className="loading">Loading...</h2>
      ) :
      (
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
                {
                  data.attributes?.isNew === 1 && rating >= 4 && data.attributes?.numOfReviews > 25 ? (
                    <img src={HotItem} alt="item-tag" />
                  ) :
                  rating >= 4 && data.attributes?.numOfReviews > 25 ? (
                    <img src={BestSeller} alt="item-tag" />
                  ) :
                  data.attributes?.isNew === 1 ? (
                    <img src={NewItem} alt="item-tag" />
                  ) :
                  (<div></div>)
                }
              </div>
              <div className="product-image">
                <img src={ data.attributes?.images[0] } alt="phone" />
              </div>
            </div>
            <div className="desc-product">
              <div className="phone-name"><span>{ data.attributes?.name }</span></div>
              <div className="phone-review">
                <StarRatings
                  rating={rating}
                  numberOfStars={5}
                  starRatedColor="gold"
                  starDimension="18px"
                  starSpacing="2px"
                  halfStarEnabled={true}
                />
                <span>{ data.attributes?.numOfReviews + ' reviews' }</span>
              </div>
              <div className="point">
                <img className="img-point" src={Point} alt="point" />
                <span>{ data.attributes?.points + ' Poins' }</span>
                <div className="stock">
                  {
                    data.attributes?.stock === 0 ?
                    <span className="item-sold-out">Sold Out</span>
                    :
                    data.attributes?.stock <= 5 ?
                    <span className="under-stock">{`Stock < 5`}</span>
                    :
                    data.attributes?.stock >= 6 ?
                    <span className="in-stock">In Stock</span>
                    :
                    <></>
                  }
                </div>
              </div>
              <div className="description">
                <div className="text" dangerouslySetInnerHTML={{ __html: data.attributes?.info }} />
              </div>
              <div className="count-section">
                <span className="count">Jumlah</span>
                <div class="counter">
                  <button disabled={disabled} onClick={decrement} className={disabled ? "disabled-calculation" : "calculation"}>-</button>
                  <button class="number">{count}</button>
                  <button disabled={incrementDisabled} onClick={increment} className={incrementDisabled ? "disabled-inc-calculation" : "calculation"}>+</button>
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
                <Button disabled={incrementDisabled} type={'primary'} text={'Redeem'} />
                <Button disabled={incrementDisabled} type={'secondary'} text={'Add to cart'} />
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
      )
    }
    </div>
  );
}

export default PageDetailList;