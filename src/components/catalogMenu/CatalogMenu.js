import './catalogMenu.scss';
import CatalogCategory from './catalogCategory/CatalogCategory';
import CatalogPrice from './catalogPrice/CatalogPrice';
import CatalogAges from './catalogAges/CatalogAges';
import CatalogAvailability from './catalogAvailability/CatalogAvailability';
import CatalogPlayers from './catalogPlayers/CatalogPlayers';
import {
  getActualFilter,
  getActualNameFilter,
} from '../catalogList/catalogListSlice';
import { useDispatch } from 'react-redux';

const CatalogMenu = () => {
  const dispatch = useDispatch();

  const resetFilters = () => {
    dispatch(getActualFilter(''));
    dispatch(getActualNameFilter(''));
  };

  return (
    <aside className="catalog-menu">
      <CatalogCategory />
      <CatalogPrice />
      <CatalogAges />
      <CatalogAvailability />
      <CatalogPlayers />
      <button onClick={() => resetFilters()} className="catalog-menu__reset">
        Сбросить фильтр
      </button>
    </aside>
  );
};
export default CatalogMenu;
