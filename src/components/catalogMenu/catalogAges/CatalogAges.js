import './catalogAges.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  getActualNameFilter,
  getActualFilter,
} from '../../catalogList/catalogListSlice';

const CatalogAges = () => {
  const dispatch = useDispatch();
  const agesData = useSelector((state) => state.catalogAges.ageData);
  const [ages, setAges] = useState(false);

  return (
    <div className="catalog-ages">
      <button
        onClick={() => setAges((ages) => !ages)}
        className={ages ? 'catalog-ages__ages-active' : 'catalog-ages__ages'}
      >
        Возрасты
      </button>
      <div
        className={
          ages ? 'catalog-ages__wrap-active' : 'catalog-ages__wrap-input'
        }
      >
        {agesData.map(({ unicId, htmlFor, descr, value, id }) => {
          return (
            <div key={id} className="catalog-ages__radio">
              <input
                onChange={(e) => {
                  dispatch(getActualFilter(e.target.value));
                  dispatch(getActualNameFilter('age'));
                }}
                id={unicId}
                className="catalog-ages__range-age"
                type="radio"
                name="age"
                value={value}
              />
              <label htmlFor={htmlFor} className="catalog-ages__label">
                {descr}
              </label>
            </div>
          );
        })}
      </div>
      <hr className="catalog-ages__hr" />
    </div>
  );
};
export default CatalogAges;
