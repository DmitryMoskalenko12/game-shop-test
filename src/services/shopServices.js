import useHttp from '../hooks/http.hook';

const useShopService = () => {
  let { request } = useHttp();

  const choiceMenu = async (name = 'warhammer') => {
    const result = await request(`http://localhost:3001/${name}`);
    return result;
  };

  return { choiceMenu };
};
export default useShopService;
