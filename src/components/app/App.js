import './app.scss';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardPage from '../../pages/CardPage';
import { catalogCards } from '../../dummy-data/dummy-data';
import { offerCarousel } from '../../dummy-data/dummy-data';

function App() {
  const MainPage = lazy(() => import('../../pages/MainPage'));
  const BasketPage = lazy(() => import('../../pages/BasketPage'));
  const CatalogMainPage = lazy(() => import('../../pages/CatalogMainPage'));
  const Page404 = lazy(() => import('../../pages/Page404'));
  const FinalCardPage = lazy(() => import('../../pages/FinalCardPage'));
  const OrderingPage = lazy(() => import('../../pages/OrderingPage'));
  const AboutCenterPage = lazy(() => import('../../pages/AboutCenterPage'));

  return (
    <Suspense
      fallback={
        <div className='loading'>
          Загрузка...
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/buyCard/:id"
            element={
              <FinalCardPage
                Component={CardPage}
                path={catalogCards}
                typeComponent={'buySlider'}
              />
            }
          />
          <Route
            path="/discountCard/:id"
            element={
              <FinalCardPage
                Component={CardPage}
                path={offerCarousel}
                typeComponent={'discount'}
              />
            }
          />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/basket/ordering" element={<OrderingPage />} />
          <Route path="/catalog" element={<CatalogMainPage />} />
          <Route
            path="/catalog/:id"
            element={
              <FinalCardPage
                Component={CardPage}
                path={catalogCards}
                typeComponent={'catalog'}
              />
            }
          />
          <Route path="/aboutCenter" element={<AboutCenterPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
