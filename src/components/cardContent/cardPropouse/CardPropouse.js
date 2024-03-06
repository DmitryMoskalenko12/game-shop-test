import './cardPropouse.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCardsForBasket } from '../../basket/basketSlice';
import CardPropousalContent from './cardPropousalContent';
import { propousalData } from '../../../dummy-data/dummy-data';
import { filterId } from '../../../helpers/helpers';

const CardPropouse = () => {
  const dispatch = useDispatch();
  const propousalData1 = useSelector((state) => state.propousal.propousalData);
  const basket = useSelector((state) => state.basket.data);

  const getUniclIdProduct = (id) => {
    const res = filterId(id, propousalData)
    dispatch(getCardsForBasket(res))   
  };

  return (
    <div className="card-propouse">
      <div className="card-propouse__title">С этим товаром покупают</div>
      <div className="card-propouse__wrap">
        {propousalData1.map(({ price, descr, countPeople, age, id, img }) => {
          return (
            <CardPropousalContent
              key={id}
              img={img}
              descr={descr}
              price={price}
              id={id}
              getUniclIdProduct={getUniclIdProduct}
              basket={basket}
              countPeople={countPeople}
              age={age}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CardPropouse;
