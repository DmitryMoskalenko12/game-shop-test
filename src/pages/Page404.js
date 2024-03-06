import page404 from '../image/404.webp';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <img
        style={{ display: 'block', margin: '0 auto' }}
        src={page404}
        alt="404"
      />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Страницы не существует
      </p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
          textDecoration: 'none',
          color: 'orange',
        }}
        to="/"
      >
        Вернуться на главную страницу
      </Link>
    </div>
  );
};
export default Page404;
