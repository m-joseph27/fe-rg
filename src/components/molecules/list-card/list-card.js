import React, { useState, useEffect } from "react";
import './list-card.scss';
import Tag from '../../../assets/new-tag.svg';
import Point from '../../../assets/point.svg';
import { Rating } from 'react-simple-star-rating';
import FavButton from "../../atoms/button/fav-button";
import UnFavButton from "../../atoms/button/unfav-button";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";

const ListCard = (props) => {
  const navigate = useNavigate();
  const [ altImage, setAltImage ] = useState('unloved');
  const [ soldOut, setSoldOut ] = useState(false);
  const [ hoveredItem, setHoveredItem ] = useState(null);
  const data = props.data;

  const onClickBtnFav = () => {
    setAltImage('unloved')
  }

  const onClickBtnUnFav = () => {
    setAltImage('loved');
  }

  const onDetailButtonClicked = (id) => {
    navigate(`/detail/${id}`);
  }

  return (
    <>
      {
        data.map(item => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={hoveredItem === item.id ? "hovered-list-card" : "list-card"}
          >
            {
              hoveredItem === item.id &&
              <div>
                <div className='hovered-item-ready'>
                  <div className="hovered-stock">
                    {
                      item.attributes.stock === 0 ?
                      <span className="item-sold-out">Sold Out</span>
                      :
                      item.attributes.stock <= 5 ?
                      <span className="under-stock">{`Stock < 5`}</span>
                      :
                      item.attributes.stock >= 6 ?
                      <span className="in-stock">In Stock</span>
                      :
                      <></>
                    }
                  </div>
                  <div className="hovered-img-phone">
                    {
                      item.attributes.stock === 0 ?
                      <img className='img-sold' src={item.attributes.images} alt="phone" />
                      :
                      <img src={item.attributes.images} alt="phone" />
                    }
                  </div>
                  <div className="hovered-phone-desc">
                    <div className="phone-name">
                      <span>{ item.attributes.name }</span>
                    </div>
                    <div className="btn-detail">
                      <button onClick={() => onDetailButtonClicked(item.id)} className="linked-button">
                        <Button type={'detail'} text={'View detail'} icon={true} />
                      </button>
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
              hoveredItem !== item.id &&
              <div className={item.attributes?.stock === 0 ? 'sold-out' : 'item-ready' }>
                <div className="tag-image">
                  {
                    item.attributes.stock > 5 ?
                    <></>
                    :
                    item.attributes.stock !== 0 ?
                    <img src={Tag} alt="item-tag" />
                    :
                    <></>
                  }
                </div>
                <div className="stock">
                  {
                    item.attributes.stock === 0 ?
                    <span className="item-sold-out">Sold Out</span>
                    :
                    item.attributes.stock <= 5 ?
                    <span className="under-stock">{`Stock < 5`}</span>
                    :
                    item.attributes.stock >= 6 ?
                    <span className="in-stock">In Stock</span>
                    :
                    <></>
                  }
                </div>
                <div className="img-phone">
                  {
                    item.attributes.stock === 0 ?
                    <img className='img-sold' src={item.attributes.images[0]} alt="phone" />
                    :
                    <img src={item.attributes.images[0]} alt="phone" />
                  }
                </div>
                <div className="phone-name">
                  <span>{ item.attributes.name }</span>
                </div>
                <div className="phone-desc">
                  <div>
                    <div className="phone-point">
                      <img className="img-point" src={Point} />
                      <span className="point">{ item.attributes.points }</span>
                    </div>
                    <div className="phone-review">
                      <Rating size={15} readonly className="star" />
                      <span>{ item.attributes.numOfReviews + ' reviews'}</span>
                    </div>
                  </div>
                  <div className="btn-favorite">
                    {
                      altImage === 'loved' ?
                      <button disabled={item.attributes.stock === 0} onClick={onClickBtnFav}>
                        <FavButton />
                      </button>
                      :
                      <button disabled={item.attributes.stock === 0} onClick={onClickBtnUnFav}>
                        <UnFavButton />
                      </button>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        ))
      }
    </>
  );
}

export default ListCard;