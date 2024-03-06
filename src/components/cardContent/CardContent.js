import './cardContent.scss';
import CardLittleCarousel from './cardLittleCarousel/CardLittleCarousel';
import CardBigCarousel from './cardBigCarousel.js/CardBigCarousel';
import CardBasketPanel from './cardBasketPanel/CardBasketPanel';
import CardInformation from './cardInformation/CardInformation';
import CardPropouse from './cardPropouse/CardPropouse';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardContent = () => {
  const objectCardData = useSelector((state) => state.cardData.carouselData);

  return (
    <section className="card-content">
      <div className="container">
        <div className="card-content__path-block">
          <Link to={'/'} className="card-content__main">
            Главная
          </Link>
          <span className="card-content__arrow">&gt;</span>
          <Link to={'/catalog'} className="card-content__catalog">
            Каталог
          </Link>
          <span className="card-content__arrow">&gt;</span>
          <Link to={'/catalog'} className="card-content__name-category">
            {objectCardData?.length === 0 ? '' : objectCardData?.nameCategory}
          </Link>
          <span className="card-content__arrow">&gt;</span>
          <Link to={'/catalog'} className="card-content__name-subcategory">
            {objectCardData?.length === 0
              ? ''
              : objectCardData?.descr.length >= 8
              ? objectCardData?.descr.slice(0, 9) + '...'
              : objectCardData?.descr}
          </Link>
          <span className="card-content__arrow">&gt;</span>
          <Link to={'#'} className="card-content__name-game">
            {objectCardData?.length === 0
              ? ''
              : objectCardData?.descr.length >= 8
              ? objectCardData?.descr.slice(0, 9) + '...'
              : objectCardData?.descr}
          </Link>
        </div>
        <h1 className="card-content__title-game">{objectCardData?.descr}</h1>
        <div className="card-content__product-wrap">
          <div className="card-content__carousel-bascet">
            <div className="card-content__carousel-wrap">
              <CardLittleCarousel objectCardData={objectCardData} />
              <CardBigCarousel objectCardData={objectCardData} />
              <CardInformation objectCardData={objectCardData} />
            </div>
            <div className="card-content__bask-propouse">
              <CardBasketPanel objectCardData={objectCardData} />
              <CardPropouse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardContent;
