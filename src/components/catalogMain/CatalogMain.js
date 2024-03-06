import './catalogMain.scss';
import CatalogMainHeader from './catalogMainHeader/CatalogMainHeader';
import CatalogMenu from '../catalogMenu/CatalogMenu';
import { Link } from 'react-router-dom';
import CatalogList from '../catalogList/CatalogList';
import Accordion from '../accordion/Accordion';
import { useSelector } from 'react-redux';

const CatalogMain = () => {
  const titleLink = useSelector((state) => state.catalogCategory.titleLink);

  return (
    <section className="catalog-main">
      <CatalogMainHeader />
      <div className="container">
        <div className="catalog-main__wrappath">
          <Link to={'/'} className="catalog-main__main">
            Главная
          </Link>
          <span className="catalog-main__arrow">&gt;</span>
          <Link to={'/catalog'} className="catalog-main__catalog">
            Каталог
          </Link>
          <span className="catalog-main__arrow">&gt;</span>
          <Link to={'#'} className="catalog-main__namegame">
            {titleLink || 'Весь каталог'}
          </Link>
        </div>

        <h2 className="catalog-main__title">{titleLink || 'Весь каталог'}</h2>
        <CatalogMenu />
        <div className="catalog-main__wrap">
          <CatalogList />
        </div>
        <Accordion />
      </div>
    </section>
  );
};
export default CatalogMain;
