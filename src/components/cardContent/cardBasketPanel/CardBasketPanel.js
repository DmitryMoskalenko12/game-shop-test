import './cardBasketPanel.scss';
import clock from '../../../image/clock.png';
import people from '../../../image/people.png';
import { useState, useRef, useEffect } from 'react';
import { getCardsForBasket } from '../../basket/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import useHttp from '../../../hooks/http.hook';
import { filterId } from '../../../helpers/helpers';

const CardBasketPanel = ({ objectCardData }) => {
  const [delivery, setDelivery] = useState(false);
  const [deliveryHeight, setDeliveryHeight] = useState('');
  const delivRef = useRef();
  const [pay, setPay] = useState(false);
  const [payHeight, setPayHeight] = useState('');
  const payRef = useRef();
  const { price, age, countPeople, id, oldPrice } = objectCardData ? objectCardData : {};
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.data);
  const actualPathForBasket = useSelector(
    (state) => state.cardData.pathForBasket
  );

  useEffect(() => {
    setDeliveryHeight(`${delivRef.current.scrollHeight}px`);
    setPayHeight(`${payRef.current.scrollHeight}px`);
  }, []);

  const getUniclIdProduct = (id) => {
    const res = filterId(id, actualPathForBasket);
    dispatch(getCardsForBasket(res))
   /*  request(`${actualPathForBasket}${id}`)
      .then((res) => dispatch(getCardsForBasket(res)))
      .catch(() => console.log('error')); */
  };

  return (
    <div className="basket-panel">
      <div className="basket-panel__code-product">Код товара:842672</div>
      <div className="basket-panel__config">
        <div className="basket-panel__people">
          <div className="basket-panel__people-img">
            <picture>
              <source src="#" />
              <img src={people} alt="people" width="42px" height="42px" />
            </picture>
          </div>
          <div className="basket-panel__number">{countPeople}</div>
        </div>
        <div className="basket-panel__timer">
          <div className="basket-panel__timer-img">
            <picture>
              <source src="#" />
              <img src={clock} alt="timer" width="32px" height="32px" />
            </picture>
          </div>
          <div className="basket-panel__time">30-60</div>
        </div>
        <div className="basket-panel__age">{age}</div>
      </div>
      <div className="basket-panel__discount">
        {oldPrice ? oldPrice + 'uah' : ''}
      </div>
      <div className="basket-panel__price">{price} грн</div>
      <button
        disabled={basket.find((item) => item.id === id)}
        onClick={() => getUniclIdProduct(id)}
        className="basket-panel__in-basket"
      >
        В корзину
      </button>
      <button className="basket-panel__one-click">Купить в 1 клик</button>
      <hr className="basket-panel__hr" />
      <button
        onClick={() => setDelivery((delivery) => !delivery)}
        className={
          delivery ? 'basket-panel__delivery-active' : 'basket-panel__delivery'
        }
      >
        Доставка
      </button>
      <div
        style={{ height: delivery ? deliveryHeight : '' }}
        ref={delivRef}
        className={
          delivery
            ? 'basket-panel__delivery-descr-active'
            : 'basket-panel__delivery-descr'
        }
      >
        <span>Самовывоз из магазина: сегодня</span>
        <span>Самовывоз из 761 пункта: 1-3 дня</span>
        <span>Курьерская доставка: 1-3 дня</span>
        <span>Доставка почтой: от 3 дней</span>
      </div>
      <button
        onClick={() => setPay((pay) => !pay)}
        className={pay ? 'basket-panel__pay-active' : 'basket-panel__pay'}
      >
        Оплата
      </button>
      <div
        style={{ height: pay ? payHeight : '' }}
        ref={payRef}
        className={
          pay ? 'basket-panel__pay-descr-active' : 'basket-panel__pay-descr'
        }
      >
        <span>Самовывоз из магазина: сегодня</span>
        <span>Самовывоз из 761 пункта: 1-3 дня</span>
        <span>Курьерская доставка: 1-3 дня</span>
        <span>Доставка почтой: от 3 дней</span>
      </div>
      <button className="basket-panel__question">Задать вопрос</button>
    </div>
  );
};
export default CardBasketPanel;
