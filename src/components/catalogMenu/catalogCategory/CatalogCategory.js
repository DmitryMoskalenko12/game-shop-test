import './catalogCategory.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from './catalogCategorySlice';
import {
  getActualNameFilter,
  getActualFilter,
} from '../../catalogList/catalogListSlice';
import { getTitleLink } from './catalogCategorySlice';

const CatalogCategory = () => {
  const categoryData = useSelector((state) => state.catalogCategory.data);
  const filter = useSelector((state) => state.catalogCategory.filter);
  const dispatch = useDispatch();
  const [categoryAll, setCategoryAll] = useState(false);
  const [subCategoryFilter, setSubCategoryFilter] = useState(false);
  const [contentIdItem, setContentIdItem] = useState(0);

  return (
    <div className="catalog-category">
      <button
        onClick={() => setCategoryAll((categoryAll) => !categoryAll)}
        className={
          categoryAll
            ? 'catalog-category__category-active'
            : 'catalog-category__category'
        }
      >
        Все категории
      </button>
      <div
        className={
          categoryAll
            ? 'catalog-category__active-category'
            : 'catalog-category__allcategory'
        }
      >
        {categoryData.map(({ filterName, id, subCategory }) => {
          return (
            <div key={id} className="catalog-category__subwrap">
              <button
                key={id}
                onClick={() => {
                  setSubCategoryFilter((subCategoryFilter) =>
                    filter === filterName ? !subCategoryFilter : true
                  );
                  dispatch(getFilter(filterName));
                }}
                className={
                  subCategoryFilter && filter === filterName
                    ? 'catalog-category__subcategory-active'
                    : 'catalog-category__subcategory'
                }
              >
                {filterName}
              </button>
              <ul
                style={{ visibility: categoryAll ? 'visible' : 'hidden' }}
                className={
                  subCategoryFilter && filter === filterName
                    ? 'catalog-category__active-list'
                    : 'catalog-category__list'
                }
              >
                {subCategory.map(({ pos, id }) => {
                  return (
                    <li
                      key={id}
                      onClick={(e) => {
                        dispatch(getActualFilter(e.target.textContent));
                        dispatch(getTitleLink(e.target.textContent));
                        dispatch(getActualNameFilter('nameCategory'));
                        setContentIdItem(id);
                      }}
                      className={
                        contentIdItem === id
                          ? 'catalog-category__item-active'
                          : 'catalog-category__item'
                      }
                    >
                      {pos}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <hr className="catalog-category__hr" />
    </div>
  );
};
export default CatalogCategory;
