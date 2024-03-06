import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCarouselData } from '../components/cardContent/cardContentSlice';
import { useEffect } from 'react';
import { getPathForBasket } from '../components/cardContent/cardContentSlice';
import { filterId } from '../helpers/helpers';

const FinalCardPage = ({ Component, path, typeComponent }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const updatePage = () => {
    switch (typeComponent) {
      case 'buySlider':
        return dispatch(getCarouselData(filterId(+id, path)));
        break;
      case 'catalog':
        return dispatch(getCarouselData(filterId(+id, path)));
        break;
      case 'discount':
        return dispatch(getCarouselData(filterId(+id, path)));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(getPathForBasket(path));
    updatePage();
  }, [id]);

  return (
    <>
      <Component />
    </>
  );
};
export default FinalCardPage;
