import './cardDiscount.scss';
import Button from '../UI/button/Button';
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import shop from '../../icons/shop.png';
import { Link } from 'react-router-dom';

const CardDiscount = ({
  id,
  countPeople,
  age,
  img,
  discount,
  descr,
  oldPrice,
  price,
  basket,
  getUniclIdProduct,
}) => {
  return (
    <div key={id} className="card-discount__card">
      <div className="card-discount__discount">{discount}</div>
      <div className="card-discount__wrapimg">
        <img src={img} alt={descr} />
      </div>

      <div className="card-discount__config">
        <div className="card-discount__people">
          <div className="card-discount__peopleimg">
            <img src={people} alt="people" />
          </div>
          <div className="card-discount__number">{countPeople}</div>
        </div>
        <div className="card-discount__timer">
          <div className="card-discount__timerimg">
            <img src={timer} alt="timer" />
          </div>
          <div className="card-discount__time">30-60</div>
        </div>
        <div className="card-discount__age">{age}</div>
      </div>
      <div className="card-discount__descr">
        <Link
          to={`/discountCard/${id}`}
          className="card-discount__link-name"
          href="#"
        >
          {descr}
        </Link>
      </div>

      <div className="card-discount__price">
        <div className="card-discount__oldprice">{oldPrice}грн</div>
        <div className="card-discount__newprice">{price}грн</div>
      </div>

      <div className="card-discount__wrapbut">
        <Button
          disabled={basket.find((item) => item.id === id)}
          onClick={() => getUniclIdProduct(id)}
          style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}
        >
          В корзину
          <span
            style={{ marginLeft: '10px' }}
            className="card-discount__wrapshop"
          >
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

export default CardDiscount;
