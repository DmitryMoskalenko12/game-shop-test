import './cardBigCarousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getOffsetBigCarousel } from '../cardContentSlice';
import { useEffect, useRef } from 'react';
import { getWidthBigCarousel } from '../cardContentSlice';

const CardBigCarousel = ({ objectCardData }) => {
  const dispatch = useDispatch();
  let offset = useSelector((state) => state.cardData.offsetBigCarousel);
  const width = useSelector((state) => state.cardData.widthBigCarousel);
  const refWidth = useRef();

  useEffect(() => {
    dispatch(
      getWidthBigCarousel(
        +getComputedStyle(refWidth.current).width.replace(/\D/gim, '')
      )
    );
  }, []);

  const onPrev = () => {
    if (offset === 0) {
      dispatch(
        getOffsetBigCarousel(
          width *
            (objectCardData?.length === 0
              ? []
              : objectCardData?.images.length - 1)
        )
      );
    } else {
      dispatch(getOffsetBigCarousel((offset -= width)));
    }
  };

  const onNext = () => {
    if (
      offset ===
      width *
        (objectCardData?.length === 0 ? [] : objectCardData?.images.length - 1)
    ) {
      dispatch(getOffsetBigCarousel(0));
    } else {
      dispatch(getOffsetBigCarousel((offset += width)));
    }
  };

  return (
    <div className="big-carousel">
      <div ref={refWidth} className="big-carousel__window">
        <div
          style={{
            width: `${
              objectCardData?.length === 0
                ? []
                : objectCardData?.images.length * 100 + '%'
            }`,
            transition: '0.7s all',
            transform: `translateX(-${offset}px)`,
          }}
          className="big-carousel__field"
        >
          {objectCardData?.length === 0
            ? []
            : objectCardData?.images.map(({ littleImg, id }) => {
                return (
                  <div key={id} className="big-carousel__slide">
                    <picture>
                      <source src="#" />
                      <img
                        src={littleImg}
                        alt="example"
                        width="574px"
                        height="397px"
                      />
                    </picture>
                  </div>
                );
              })}
        </div>
      </div>
      <button onClick={() => onPrev()} className="big-carousel__prev">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.4001 7.9998L14.4001 15.9998L22.4001 23.9998L20.8001 27.1998L9.6001 15.9998L20.8001 4.7998L22.4001 7.9998Z"
            fill="#2A2A2A"
          />
        </svg>
      </button>
      <button onClick={() => onNext()} className="big-carousel__next">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.60039 24.0002L17.6004 16.0002L9.60039 8.00019L11.2004 4.80019L22.4004 16.0002L11.2004 27.2002L9.60039 24.0002Z"
            fill="#2A2A2A"
          />
        </svg>
      </button>
    </div>
  );
};
export default CardBigCarousel;
