import './aboutCenter.scss';
import { Link } from 'react-router-dom';
import center1 from '../../image/center1.webp';
import center2 from '../../image/center2.webp';
import center3 from '../../image/center3.webp';
import center4 from '../../image/center4.webp';

const AboutCenter = () => {
  return (
    <section className="about-center">
      <div className="container">
        <div className="about-center__path">
          <div className="about-center__main-page">
            <Link to={'/'}>Главная</Link>
          </div>
          <span className="about-center__arrow">&gt;</span>
          <div className="about-center__center">
            <Link to={'/aboutCenter'}>О центре</Link>
          </div>
        </div>
        <h2 className="about-center__title">О центре</h2>
        <div className="about-center__mission-block">
          <div className="about-center__descr-block">
            <div className="about-center__mission-title">Наша миссия</div>
            <div className="about-center__descr">
              Разнообразный и богатый опыт укрепление и развитие структуры в
              значительной степени обуславливает создание модели развития.
              Разнообразный и богатый опыт консультация с широким активом
              позволяет выполнять важные задания по разработке системы обучения
              кадров, соответствует насущным потребностям. Повседневная практика
              показывает, что начало повседневной работы по формированию позиции
              позволяет выполнять важные задания по разработке новых
              предложений. Повседневная практика показывает, что дальнейшее
              развитие различных форм деятельности в значительной степени
              обуславливает создание новых предложений.
            </div>
          </div>
          <div className="about-center__img-wrap">
            <div className="about-center__wrap-img">
              <picture>
                <source src="#" />
                <img src={center1} alt="books" width="255px" height="297px" />
              </picture>
            </div>
            <div className="about-center__wrap-img">
              <picture>
                <source src="#" />
                <img src={center2} alt="library" width="255px" height="297px" />
              </picture>
            </div>
          </div>
        </div>
        <div className="about-center__events-block">
          <div className="about-center__img-wrap">
            <div className="about-center__wrap-img">
              <picture>
                <source src="#" />
                <img
                  src={center3}
                  alt="checkers"
                  width="255px"
                  height="297px"
                />
              </picture>
            </div>
            <div className="about-center__wrap-img">
              <picture>
                <source src="#" />
                <img src={center4} alt="map" width="255px" height="297px" />
              </picture>
            </div>
          </div>
          <div className="about-center__descr-events">
            <div className="about-center__events-title">Наши мероприятия</div>
            <div className="about-center__descr">
              Не следует, однако забывать, что укрепление и развитие структуры
              представляет собой интересный эксперимент проверки модели
              развития. С другой стороны реализация намеченных плановых заданий
              в значительной степени обуславливает создание систем массового
              участия.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCenter;


