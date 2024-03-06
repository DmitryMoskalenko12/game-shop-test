import './catalogPlayers.scss';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { useDispatch } from 'react-redux';
import {
  getActualFilter,
  getActualNameFilter,
} from '../../catalogList/catalogListSlice';

const CatalogPlayers = () => {
  const [players, setPlayers] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="catalog-players">
      <button
        onClick={() => setPlayers((players) => !players)}
        className={
          players
            ? 'catalog-players__players-around'
            : 'catalog-players__players'
        }
      >
        Количество игроков
      </button>

      <div
        className={
          players
            ? 'catalog-players__wrap-active'
            : 'catalog-players__wrap-content'
        }
      >
        <ReactSlider
          className="catalog-players__range"
          thumbClassName="catalog-players__thumb"
          trackClassName="catalog-players__track"
          onChange={(value) => {
            dispatch(getActualFilter(`${value[0]}-${value[1]}`));
            dispatch(getActualNameFilter('countPeople'));
          }}
          defaultValue={[0, 6]}
          min={0}
          max={6}
          renderTrack={(props, state) => (
            <span {...props}>{state.valueNow}</span>
          )}
          renderThumb={(props, state) => (
            <div
              style={{
                background: (props) =>
                  props.index === 2
                    ? '#ddd'
                    : props.index === 1
                    ? '#000'
                    : '#ddd',
              }}
              {...props}
              index={state.index}
            />
          )}
        />
        <div className="catalog-players__value-block">
          <div className="catalog-players__num">0</div>
          <div className="catalog-players__num">1</div>
          <div className="catalog-players__num">2</div>
          <div className="catalog-players__num">3</div>
          <div className="catalog-players__num">4</div>
          <div className="catalog-players__num">5</div>
          <div className="catalog-players__num">6</div>
        </div>
      </div>
    </div>
  );
};
export default CatalogPlayers;
