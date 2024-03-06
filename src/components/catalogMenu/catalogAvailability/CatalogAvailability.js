import './catalogAvailability.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  getActualFilter,
  getActualNameFilter,
} from '../../catalogList/catalogListSlice';

const CatalogAvailability = () => {
  const dispatch = useDispatch();
  const availabilityData = useSelector(
    (state) => state.catalogAvailability.availabilityData
  );
  const [availability, setAvailability] = useState(false);

  return (
    <div className="catalog-availability">
      <button
        onClick={() => setAvailability((availability) => !availability)}
        className={
          availability
            ? 'catalog-availability__availability-active'
            : 'catalog-availability__availability'
        }
      >
        Наличие
      </button>
      <div
        className={
          availability
            ? 'catalog-availability__wrap-active'
            : 'catalog-availability__wrap-input'
        }
      >
        {availabilityData.map(({ unicId, htmlFor, descr, value, id }) => {
          return (
            <div key={id} className="catalog-availability__radio">
              <input
                onChange={(e) => {
                  dispatch(getActualFilter(e.target.value));
                  dispatch(getActualNameFilter('availability'));
                }}
                id={unicId}
                className="catalog-availability__range-availability"
                type="radio"
                name="availability"
                value={value}
              />
              <label htmlFor={htmlFor} className="catalog-availability__label">
                {descr}
              </label>
            </div>
          );
        })}
      </div>
      <hr className="catalog-availability__hr" />
    </div>
  );
};
export default CatalogAvailability;
