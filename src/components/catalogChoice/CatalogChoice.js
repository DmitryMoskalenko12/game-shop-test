import './catalogChoice.scss';
import { useSelector } from 'react-redux';

const CatalogChoice = () => {
  const resultChoice = useSelector((state) => state.catalogChoice.data);
  const status = useSelector((state) => state.catalogChoice.status);

  return (
    <section className="catalog-choice">
      <div className="container">
        <div className="catalog-choice__wrap">
          {resultChoice.map(({ img, path, catalog, descr, clazz, id }) => {
            return (
              <div key={id} className={clazz}>
                <h2
                  style={{ display: catalog ? 'block' : 'none' }}
                  className="catalog-choice__catalog"
                >
                  {catalog}
                </h2>
                <div className="catalog-choice__imgwrap">
                  <picture>
                    <source src="#" />
                    <img src={img} alt={descr} width="100%" height="100%" />
                  </picture>
                  <div className="catalog-choice__wraplink">
                    <a className="catalog-choice__descr" href={path}>
                      {descr}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CatalogChoice;
