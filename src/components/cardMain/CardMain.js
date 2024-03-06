import './cardMain.scss';
import Button from '../UI/button/Button';
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import shop from '../../icons/shop.png';
import { Link } from 'react-router-dom';

const CardMain = ({
  path,
  basket,
  getUniclIdProduct,
  img,
  descr,
  price,
  countPeople,
  age,
  id,
}) => {
  return (
    <div key={id} className="card-main">
      <div className="card-main__wrapimg">
        <img src={img} alt={descr} />
      </div>

      <div className="card-main__config">
        <div className="card-main__people">
          <div className="card-main__peopleimg">
            <img src={people} alt="people" />
          </div>
          <div className="card-main__number">{countPeople}</div>
        </div>
        <div className="card-main__timer">
          <div className="card-main__timerimg">
            <img src={timer} alt="timer" />
          </div>
          <div className="card-main__time">30-60</div>
        </div>
        <div className="card-main__age">{age}</div>
      </div>

      <div className="card-main__descr">
        <Link to={`${path}${id}`} className="card-main__link-name" href="#">
          {descr}
        </Link>
      </div>

      <div className="card-main__price">
        <div className="card-main__newprice">{price} грн</div>
      </div>

      <div className="card-main__wrapbut">
        <Button
          disabled={basket.find((item) => item.id === id)}
          onClick={() => {
            getUniclIdProduct(id);
          }}
          style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}
        >
          В корзину
          <span style={{ marginLeft: '10px' }} className="card-main__wrapshop">
            <img src={shop} alt="shop" />
          </span>
        </Button>
        <Button
          style={{
            background: 'transparent',
            border: '2px solid #F9A43F',
            color: '#F9A43F',
            display: 'block',
            margin: '0 auto',
          }}
        >
          Купить в 1 клик
        </Button>
      </div>
    </div>
  );
};
export default CardMain;
