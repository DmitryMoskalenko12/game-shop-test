import './catalogList.scss';
import CardMain from '../cardMain/CardMain';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { page, getActualLimit, getHeaders, getDataCards } from './catalogListSlice';
import { getCardsForBasket } from '../basket/basketSlice';
import { fetchServerDataCards } from '../../helpers/helpers';
import { catalogCards } from '../../dummy-data/dummy-data';
import { filterId } from '../../helpers/helpers';

const CatalogList = () => {
  const cardsData = useSelector((state) => state.catalogCards.dataCards);
  const basket = useSelector((state) => state.basket.data);
  const pageNum = useSelector((state) => state.catalogCards.page);
  const totalHeaders = useSelector((state) => state.catalogCards.headers);
  const actualLimit = useSelector((state) => state.catalogCards.limit);
  const actualNameFilter = useSelector(
    (state) => state.catalogCards.setActualNameFilter
  );
  const actualFilter = useSelector((state) => state.catalogCards.actualFilter);
  const status = useSelector((state) => state.catalogCards.status);
  const path = useSelector((state) => state.catalogCards.path);
  const [arrBut, setArrBut] = useState([]);
  const dispatch = useDispatch();

  const getTotalPages = (limit, total) => {
    return Math.ceil(total / limit);
  };

  const getNumberOfPage = useMemo(() => {
    /* def 12 */ /* 104 */
    return getTotalPages(+actualLimit, +totalHeaders);
  }, [totalHeaders, pageNum]);

  const count = [];
  for (let i = 1; i <= getNumberOfPage; i++) {
    count.push(i);
  }

  useEffect(() => {
    if (window.screen.availWidth <= 991) {
      dispatch(getActualLimit(3));
    } else {
      dispatch(getActualLimit(12));
    }

    const res = fetchServerDataCards(catalogCards, actualLimit, pageNum, actualNameFilter, actualFilter);
     dispatch(getDataCards(res.res1))
     dispatch(getHeaders(res.res2.length))
  }, [pageNum, actualLimit, actualNameFilter, actualFilter]);

  useEffect(() => {
    let tempNumberOfPages = [...arrBut];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = '...';

    if (count.length === 0) {
      tempNumberOfPages = [0];
    } else if (count.length === 1 /* && pageNum === 1 */) {
      tempNumberOfPages = [1];
      dispatch(page(1));
    } else if (count.length === 2 /* && pageNum === 2 */) {
      tempNumberOfPages = [1, 2];
    } else if (count.length === 3 /* && pageNum === 3 */) {
      tempNumberOfPages = [1, 2, 3];
    } else if (count.length === 4 /* && pageNum === 4 */) {
      tempNumberOfPages = [1, 2, 3, 4];
    } else if (pageNum >= 1 && pageNum <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, count.length];
    } else if (pageNum === 4) {
      const sliced = count.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, count.length];
    } else if (pageNum > 4 && pageNum < count.length - 2) {
      const sliced1 = count.slice(pageNum - 2, pageNum);
      const sliced2 = count.slice(pageNum, pageNum + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        count.length,
      ];
    } else if (pageNum > count.length - 3) {
      const sliced = count.slice(count.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (pageNum === dotsInitial) {
      dispatch(page(arrBut[arrBut.length - 3] + 1));
    } else if (pageNum === dotsRight) {
      dispatch(page(arrBut[3] + 2));
    } else if (pageNum === dotsLeft) {
      dispatch(page(arrBut[3] - 2));
    }
    setArrBut(tempNumberOfPages);
  }, [pageNum, getNumberOfPage, actualLimit]);

  const getUniclIdProduct = (id) => {
    const res = filterId(id, catalogCards);
    dispatch(getCardsForBasket(res))
  };

  const loading =
    status === 'loading' ? (
      <div className="catalog-list__loading">Загрузка...</div>
    ) : null;
  const content = !(status == 'loading' || status == 'error') ? (
    cardsData.length === 0 ? (
      <div className="catalog-list__null">Таких товаров нет</div>
    ) : (
      cardsData.map(({ img, descr, price, countPeople, age, id }) => {
        return (
          <CardMain
            key={id}
            path={path}
            getUniclIdProduct={getUniclIdProduct}
            basket={basket}
            img={img}
            descr={descr}
            price={price}
            countPeople={countPeople}
            age={age}
            id={id}
          />
        );
      })
    )
  ) : null;
  const fail =
    status === 'error' ? (
      <div className="catalog-list__error">Ошибка</div>
    ) : null;

  return (
    <section className="catalog-list">
      <div className="catalog-list__wrap-card">
        {content}
        {loading}
        {fail}
      </div>
      <div className="catalog-list__wrap-pagination">
        <button
          onClick={() => {
            dispatch(page(pageNum === 1 ? pageNum : pageNum - 1));
          }}
          className="catalog-list__button-left"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="#2A2A2A" />
          </svg>
        </button>
        {arrBut.map((num, i) => {
          return (
            <button
              onClick={() => {
                dispatch(page(num));
              }}
              key={i}
              className={
                num == pageNum
                  ? 'catalog-list__page-active'
                  : 'catalog-list__page-button'
              }
            >
              {num}
            </button>
          );
        })}
        <button
          onClick={() => {
            dispatch(page(pageNum === count.length ? pageNum : pageNum + 1));
          }}
          className="catalog-list__button-right"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#2A2A2A" />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default CatalogList;
