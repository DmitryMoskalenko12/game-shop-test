import Header from '../components/header/Header';
import NavMenu from '../components/navMenu/NavMenu';
import Carousel from '../components/carousel/Carousel';
import CatalogChoice from '../components/catalogChoice/CatalogChoice';
import BuyCarousel from '../components/buyCarousel/BuyCarousel';
import OfferCarousel from '../components/offerCarousel/OfferCarousel';
import Activity from '../components/activity/Activity';
import MoreInteres from '../components/moreInteres/MoreInteres';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <Carousel />
      <CatalogChoice />
      <BuyCarousel />
      <OfferCarousel />
      <Activity />
      <MoreInteres />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
