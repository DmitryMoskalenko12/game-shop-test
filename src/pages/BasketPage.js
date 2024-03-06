import Basket from '../components/basket/Basket';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavMenu from '../components/navMenu/NavMenu';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

const BasketPage = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <ErrorBoundary>
        <Basket />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
export default BasketPage;
