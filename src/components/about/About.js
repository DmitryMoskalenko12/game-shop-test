import './about.scss';
import shop from '../../image/shop.webp';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrap">
          <div className="about__descr">
            <h2 className="about__title">Об игровом центре «GoldFish»</h2>
            <p>
              «GoldFish»- магазин, в котором Вы можете купить отличный подарок
              как для себя, так и для своих близких.
            </p>

            <p>
              В ассортименте нашего магазина представлены тысячи настольных игр
              на любой вкус: простые и посложнее, семейные и только для
              взрослых, для двоих и для больших компаний, детективные и
              логические, ролевые и стратегические настолки. «GoldFish» также
              регулярно проводит собственные игротеки:турниры по Magic: the
              Gathering (от компании Wizards of the coast) и Warhammer (от Games
              Workshop).{' '}
            </p>

            <p>
              В нашем магазине можно найти нужные аксессуары для любимых игр
              (протекторы для карт и коллекций), инструменты для
              самостоятельного оформления и покраски фигурок (кейсы, подставки,
              краски Vallejo и др.) и многое другое.
            </p>

            <p>
              «GoldFish» - это не только магазин настольных игр, но и
              полноценный хобби-центр. Здесь можно арендовать столы для игр с
              друзьями, проходить обучение и мастер-классы по интересующим тебя
              играм, заводить новые знакомства и приобщаться к игровому
              комьюнити!
            </p>
          </div>
          <div className="about__wrapimg">
            <picture>
              <source src="#" />
              <img src={shop} alt="shop" width="540px" height="508px" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
