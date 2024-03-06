import './offerCarousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  offset,
  slideIndex,
  width,
} from './offerCarouselSlice';
import { getCardsForBasket } from '../basket/basketSlice';
import CardDiscount from '../cardDiscount/CardDiscount';
import { filterId } from '../../helpers/helpers';

const OfferCarousel = () => {
  const offerCards = useSelector((state) => state.offerCarousel.data);
  const basket = useSelector((state) => state.basket.data);
  const dispatch = useDispatch();
  let offsetCarousel = useSelector((state) => state.offerCarousel.offset);
  const slideIndexCarousel = useSelector(
    (state) => state.offerCarousel.slideIndex
  );
  let windowWidthResult = useSelector((state) => state.offerCarousel.width);
  const pathForBasket = useSelector(
    (state) => state.offerCarousel.pathForBasket
  );
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
    if (slideIndexCarousel === offerCards.length) {
      dispatch(slideIndex(1));
    } else {
      dispatch(slideIndex(slideIndexCarousel + 1));
    }
    if (
      offsetCarousel ===
      (+windowWidthResult + +marginRight) *
        (offerCards.length / slideNumber === offerCards.length
          ? offerCards.length - 1
          : Math.ceil(offerCards.length / slideNumber - 1))
    ) {
      dispatch(offset(0));
    } else {
      dispatch(offset((offsetCarousel += +windowWidthResult + +marginRight)));
    }
  };

  const prev = () => {
    if (slideIndexCarousel === 1) {
      dispatch(slideIndex(offerCards.length));
    } else {
      dispatch(slideIndex(slideIndexCarousel - 1));
    }
    if (offsetCarousel === 0) {
      dispatch(
        offset(
          (offsetCarousel =
            (+windowWidthResult + +marginRight) *
            (offerCards.length / slideNumber === offerCards.length
              ? offerCards.length - 1
              : Math.ceil(offerCards.length / slideNumber - 1)))
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
    const res = filterId(id, pathForBasket);
    dispatch(getCardsForBasket(res));    
  };

  return (
    <section className="offer-carousel">
      <div className="container">
        <h1 className="offer-carousel__title">Специальные предложения</h1>
        <div className="offer-carousel__cont-wrap">
        <div ref={windowWidth} className="offer-carousel__window">
          <div
            style={{
              width: `${100 * offerCards.length + '%'}`,
              position: 'relative',
              transition: '0.7s all',
              transform: `translateX(-${offsetCarousel}px)`,
            }}
            className="offer-carousel__field"
          >
            {offerCards.map(
              ({
                img,
                descr,
                price,
                id,
                discount,
                age,
                oldPrice,
                countPeople,
              }) => {
                return (
                  <CardDiscount
                    key={id}
                    img={img}
                    age={age}
                    descr={descr}
                    price={price}
                    id={id}
                    discount={discount}
                    oldPrice={oldPrice}
                    getUniclIdProduct={getUniclIdProduct}
                    basket={basket}
                    countPeople={countPeople}
                  />
                );
              }
            )}
          </div>
        </div>
        <button onClick={() => prev()} className="offer-carousel__prev"></button>
        <button onClick={() => next()} className="offer-carousel__next"></button>
        </div>     
      </div>
    </section>
  );
};
export default OfferCarousel;
