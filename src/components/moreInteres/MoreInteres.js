import './moreInteres.scss';
import { useSelector } from 'react-redux';

const MoreInteres = () => {
  const moreInteresData = useSelector((state) => state.moreInteres.data);

  return (
    <section className="more-interes">
      <div className="container">
        <div className="more-interes__title">Больше интересной информации</div>
        <div className="more-interes__wrap">
          {moreInteresData.map(({ img, descr1, descr2, id }) => {
            return (
              <div key={id} className="more-interes__card">
                <div className="more-interes__wrapimg">
                  <img src={img} alt={descr1} />
                </div>
                <div className="more-interes__descr">
                  <div className="more-interes__nameactivity">{descr1}</div>
                  <div className="more-interes__maindescr">{descr2}</div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="more-interes__button">Узнать больше</button>
      </div>
    </section>
  );
};
export default MoreInteres;
