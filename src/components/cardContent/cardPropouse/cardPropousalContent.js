import Button from '../../UI/button/Button';
import people from '../../../icons/people.png';
import timer from '../../../icons/timer.png';
import shop from '../../../icons/shop.png';

const CardPropousalContent = ({
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
    <div key={id} className="card-propouse__card">
      <div className="card-propouse__wrapimg">
        <picture>
          <source src="#" />
          <img src={img} alt={descr} width="193px" height="168px" />
        </picture>
      </div>

      <div className="card-propouse__config">
        <div className="card-propouse__people">
          <div className="card-propouse__peopleimg">
            <picture>
              <source src="#" />
              <img src={people} alt="people" width="18px" height="13px" />
            </picture>
          </div>
          <div className="card-propouse__number">{countPeople}</div>
        </div>
        <div className="card-propouse__timer">
          <div className="card-propouse__timerimg">
            <picture>
              <source src="#" />
              <img src={timer} alt="timer" width="10px" height="13px" />
            </picture>
          </div>
          <div className="card-propouse__time">30-60</div>
        </div>
        <div className="card-propouse__age">{age}</div>
      </div>

      <div className="card-propouse__descr">{descr}</div>

      <div className="card-propouse__price">
        <div className="card-propouse__newprice">{price}</div>
      </div>

      <div className="card-propouse__wrapbut">
        <Button
          disabled={basket.find((item) => item.id === id)}
          onClick={() => {
            getUniclIdProduct(id);
          }}
          style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}
        >
          В корзину
          <span
            style={{ marginLeft: '10px' }}
            className="card-propouse__wrapshop"
          >
            <picture>
              <source src="#" />
              <img src={shop} alt="shop" width="19px" height="15px" />
            </picture>
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
export default CardPropousalContent;
