import './catalogPrice.scss';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getActualNameFilter,
  getActualFilter,
} from '../../catalogList/catalogListSlice';

const CatalogPrice = () => {
  const [priceEffect, setPriceEffect] = useState(false);
  const dispatch = useDispatch();
  const priceData = useSelector((state) => state.catalogPrice.rangePriceData);

  return (
    <div className="catalog-price">
      <button
        onClick={() => setPriceEffect((priceEffect) => !priceEffect)}
        className={
          priceEffect ? 'catalog-price__price-around' : 'catalog-price__price'
        }
      >
        Цена
      </button>
      <div
        className={
          priceEffect
            ? 'catalog-price__wrap-active'
            : 'catalog-price__wrap-content'
        }
      >
        <div className="catalog-price__input-wrap">
          {priceData.map(({ unicId, htmlFor, descr, value, id }) => {
            return (
              <div key={id} className="catalog-price__radio">
                <input
                  onChange={(e) => {
                    dispatch(getActualFilter(e.target.value));
                    dispatch(getActualNameFilter('priceFilter'));
                  }}
                  id={unicId}
                  className="catalog-price__input"
                  type="radio"
                  name="age"
                  value={value}
                />
                <label htmlFor={htmlFor} className="catalog-price__label">
                  {descr}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="catalog-price__hr" />
    </div>
  );
};
export default CatalogPrice;
