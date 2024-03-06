import './buyCarousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  offset,
  slideIndex,
  width,
} from './buyCarouselSlice';
import { getCardsForBasket } from '../basket/basketSlice';

import CardMain from '../cardMain/CardMain';
import { filterId } from '../../helpers/helpers';
import { catalogCards } from '../../dummy-data/dummy-data';

const BuyCarousel = () => {
  const buyCards = useSelector((state) => state.buyCarousel.data);
  const basket = useSelector((state) => state.basket.data);
  const dispatch = useDispatch();
  let offsetCarousel = useSelector((state) => state.buyCarousel.offset);
  const slideIndexCarousel = useSelector(
    (state) => state.buyCarousel.slideIndex
  );
  let windowWidthResult = useSelector((state) => state.buyCarousel.width);
  const path = useSelector((state) => state.buyCarousel.path);
  let windowWidth = useRef();

  const [slideNumber, setSlideNumber] = useState(0);
  const [marginRight, setMarginRight] = useState(0);

  useEffect(() => {
    if (window.screen.availWidth <= 1920 && window.screen.availWidth >= 1200) {
      setSlideNumber(/* 7 */ 4);
      setMarginRight(30);
    } else if (
      window.screen.availWidth <= 1199 &&
      window.screen.availWidth >= 992
    ) {
      setSlideNumber(/* 6 */ 3);
      setMarginRight(8);
    } else if (
      window.screen.availWidth <= 991 &&
      window.screen.availWidth >= 768
    ) {
      setSlideNumber(/* 5 */ 2);
      setMarginRight(21);
    } else if (
      window.screen.availWidth <= 767 &&
      window.screen.availWidth >= 576
    ) {
      setSlideNumber(/* 5 */ 2);
      setMarginRight(2);
    } else if (window.screen.availWidth <= 575) {
      setSlideNumber(1);
      setMarginRight(0);
    }
  }, []);

  const next = () => {
    if (slideIndexCarousel === buyCards.length) {
      dispatch(slideIndex(1));
    } else {
      dispatch(slideIndex(slideIndexCarousel + 1));
    }
    if (
      offsetCarousel ===
      (+windowWidthResult + +marginRight) *
        (buyCards.length / slideNumber === buyCards.length
          ? buyCards.length - 1
          : Math.ceil(buyCards.length / slideNumber - 1))
    ) {
      dispatch(offset(0));
    } else {
      dispatch(offset((offsetCarousel += +windowWidthResult + +marginRight)));
    }
  };

  const prev = () => {
    if (slideIndexCarousel === 1) {
      dispatch(slideIndex(buyCards.length));
    } else {
      dispatch(slideIndex(slideIndexCarousel - 1));
    }
    if (offsetCarousel === 0) {
      dispatch(
        offset(
          (offsetCarousel =
            (+windowWidthResult + +marginRight) *
            (buyCards.length / slideNumber === buyCards.length
              ? buyCards.length - 1
              : Math.ceil(buyCards.length / slideNumber - 1)))
        )
      );
    } else {
      dispatch(offset((offsetCarousel -= +windowWidthResult + +marginRight)));
    }
  };

  useEffect(() => {
    dispatch(
      width(getComputedStyle(windowWidth.current).width.replace(/\D/gim, ''))
    );
    //eslint-disable-next-line
  }, []);

  const getUniclIdProduct = (id) => {
    const res = filterId(id, catalogCards);
    dispatch(getCardsForBasket(res))
  };

  return (
    <section className="buy-carousel">
      <div className="container">
        <h2 className="buy-carousel__title">Успей купить</h2>
        <div className="buy-carousel__cont-wrap">
        <div ref={windowWidth} className="buy-carousel__window">
          <div
            style={{
              width: `${100 * buyCards.length + '%'}`,
              position: 'relative',
              transition: '0.7s all',
              transform: `translateX(-${offsetCarousel}px)`,
            }}
            className="buy-carousel__field"
          >
            {buyCards.map(({ img, descr, price, countPeople, age, id }) => {
              return (
                <CardMain
                  key={id}
                  path={path}
                  img={img}
                  descr={descr}
                  price={price}
                  id={id}
                  getUniclIdProduct={getUniclIdProduct}
                  basket={basket}
                  countPeople={countPeople}
                  age={age}
                />
              );
            })}
          </div>
        </div>
        <button onClick={() => prev()} className="buy-carousel__prev"></button>
        <button onClick={() => next()} className="buy-carousel__next"></button>
        </div>
      </div>
    </section>
  );
};
export default BuyCarousel;
