import { useEffect } from 'react';
import './catalog.scss';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilter } from './catalogSlice';
import { finalFilter } from './catalogSlice';

const Catalog = (props) => {
  const finalActiveFilter = useSelector((state) => state.catalog.activeFilter);
  const loadingOrError = useSelector((state) => state.catalog.changeStatus);
  const catalog = useSelector(finalFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('active', finalActiveFilter);
  }, [finalActiveFilter]);

  const { setModal } = props;
  const catalogLink = [
    {
      clazz: 'catalog__link start',
      href: '#',
      content: 'Настольные игры',
      id: 1,
    },
    {
      clazz: 'catalog__link start',
      href: '#',
      content: 'Warhammer 40000',
      id: 2,
    },
    {
      clazz: 'catalog__link start',
      href: '#',
      content: 'Magic: the Gathering',
      id: 3,
    },
    {
      clazz: 'catalog__link start',
      href: '#',
      content: 'Аксессуары для игр',
      id: 4,
    },
    { clazz: 'catalog__link start', href: '#', content: 'Краски', id: 5 },
    {
      clazz: 'catalog__link start',
      href: '#',
      content: 'Товары для детей',
      id: 6,
    },
    {
      clazz: 'catalog__link start',
      last: 'last',
      href: '#',
      content: 'Аксессуары для моделизма',
      id: 7,
    },
  ];

  const fetching =
    loadingOrError === 'loading' ? (
      <div className="catalog__loading">Loading...</div>
    ) : null;
  const fail =
    loadingOrError === 'error' ? (
      <div className="catalog__error">Error</div>
    ) : null;
  const content = !(fetching || fail)
    ? catalog
        .filter((item) => item.name)
        .map(({ id, count, name }) => {
          return (
            <div key={id}>
              <a href="#" className="catalog__choicelink">
                {name} {count}
              </a>
            </div>
          );
        })
    : null;
  const title = !(fetching || fail)
    ? catalog
        .filter((item) =>
          item.title === finalActiveFilter ? item.title : null
        )
        .map((title) => {
          return (
            <li key={title.title} className="catalog__titlechoice">
              {title.title}
            </li>
          );
        })
    : null;

  return (
    <nav className="catalog">
      <ul className="catalog__category">
        <li onClick={() => setModal(false)} className="catalog__closeall start">
          <div className="catalog__close">&times;</div>
          <div className="catalog__categoruclose">Все категории</div>
        </li>
        <li className="catalog__hr"></li>
        {catalogLink.map(({ content, href, clazz, last }, i) => {
          return (
            <li
              onClick={(e) => {
                dispatch(activeFilter(e.target.textContent));
                localStorage.setItem('active', content);
              }}
              style={{
                background:
                  localStorage.getItem('active') === content ? '#F9A43F' : null,
              }}
              key={i}
              className={clazz}
            >
              <a className={last} href={href}>
                {content}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="catalog__choice">
        {title}
        <li className="catalog__wraplink">
          {content}
          {fetching}
          {fail}
        </li>
      </ul>
    </nav>
  );
};

export default Catalog;
