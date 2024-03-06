import './cardLittleCarousel.scss';
import {
  getOffsetLittleCarousel,
} from '../cardContentSlice';
import { useSelector, useDispatch } from 'react-redux';

const CardLittleCarousel = ({ objectCardData }) => {
  const dispatch = useDispatch();
  let offset = useSelector((state) => state.cardData.offsetLittleCarousel);
  const height = useSelector((state) => state.cardData.heightLittleCarousel);

  const onUp = () => {
    if (offset === 0) {
      dispatch(
        getOffsetLittleCarousel(
          (height + 25) *
            (objectCardData?.length === 0
              ? []
              : objectCardData?.images.length - 3)
        )
      );
    } else {
      dispatch(getOffsetLittleCarousel((offset -= +height + 25)));
    }
  };

  const onDown = () => {
    if (
      offset ===
      (height + 25) *
        (objectCardData?.length === 0 ? [] : objectCardData?.images.length - 3)
    ) {
      dispatch(getOffsetLittleCarousel(0));
    } else {
      dispatch(getOffsetLittleCarousel((offset += +height + 25)));
    }
  };

  return (
    <div className="little-carousel">
      <div className="little-carousel__window">
        <div
          style={{
            height: `${
              objectCardData?.length === 0
                ? []
                : objectCardData?.images.length * 100 + '%'
            }`,
            transition: '0.7s all',
            transform: `translateY(-${offset}px)`,
          }}
          className="little-carousel__field"
        >
          {objectCardData?.length === 0
            ? []
            : objectCardData?.images.map(({ littleImg, id }) => {
                return (
                  <div key={id} className="little-carousel__slide">
                    <picture>
                      <source src="#" />
                      <img
                        src={littleImg}
                        alt="example"
                        width="85px"
                        height="85px"
                      />
                    </picture>
                  </div>
                );
              })}
        </div>
      </div>
      <button onClick={() => onUp()} className="little-carousel__up">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0002 22.3996L16.0002 14.3996L8.00019 22.3996L4.80019 20.7996L16.0002 9.59961L27.2002 20.7996L24.0002 22.3996Z"
            fill="#2A2A2A"
          />
        </svg>
      </button>
      <button onClick={() => onDown()} className="little-carousel__down">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9998 9.60039L15.9998 17.6004L23.9998 9.60039L27.1998 11.2004L15.9998 22.4004L4.7998 11.2004L7.9998 9.60039Z"
            fill="#2A2A2A"
          />
        </svg>
      </button>
    </div>
  );
};
export default CardLittleCarousel;
