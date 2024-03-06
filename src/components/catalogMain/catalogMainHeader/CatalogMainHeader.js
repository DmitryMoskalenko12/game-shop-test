import './catalogMainHeader.scss';

const CatalogMainHeader = () => {
  return (
    <section className="catalog-header">
      <div className="container">
        <h2 className="catalog-header__title">
          Октябрьский турнир Warhammer 40000
        </h2>
        <h3 className="catalog-header__mini-title">
          У тебя есть команда и вы готовы принять участие в турнире Warhammer
          40000?{' '}
        </h3>
      </div>
    </section>
  );
};
export default CatalogMainHeader;
