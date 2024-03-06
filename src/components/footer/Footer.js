import './footer.scss';
import logo from '../../image/logo.png';
import insta from '../../icons/insta.png';
import vk from '../../icons/vk.png';
import fb from '../../icons/fb.png';
import master from '../../icons/master.png';
import visa from '../../icons/visa.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapcontent">
          <div className="footer__logoblock">
            <a href="#">
              <div className="footer__imgwrap">
                <img src={logo} alt="logo" />
              </div>
            </a>
            <div className="footer__logodescr">
              г. Николаев, ул. Малая Морская 6
            </div>
          </div>

          <ul className="footer__catalog">
            <li className="footer__titlecatalog">Каталог</li>
            <li className="footer__footlist">
              <a href="#">Warhammer 40000</a>
            </li>
            <li className="footer__footlist">
              <a href="#">Настольные игры</a>
            </li>
            <li className="footer__footlist">
              <a href="#">Magic: the Gathering</a>
            </li>
            <li className="footer__footlist">
              <a href="#">Аксессуары для игр</a>
            </li>
            <li className="footer__footlist">
              <a href="#">Краски </a>
            </li>
            <li className="footer__footlist">
              <a href="#">
                Аксессуары для <br /> моделизма
              </a>
            </li>
          </ul>
          <ul className="footer__aboutus">
            <li className="footer__listabout">
              <a href="#">Правила клуба</a>
            </li>
            <li className="footer__listabout">
              <a href="#">Мероприятия</a>
            </li>
            <li className="footer__listabout">
              <a href="#">О нас</a>
            </li>
            <li className="footer__listabout">
              <a href="#">Контакты</a>
            </li>
            <li className="footer__listabout">
              <a href="#">Блог</a>
            </li>
            <li className="none">
              <a href="#">Оплата и достака</a>
            </li>
            <li className="none">
              <a href="#">Гарантия и возврат</a>
            </li>
          </ul>
          <ul className="footer__delivery">
            <li className="footer__paydel">
              <a href="#">Оплата и достака</a>
            </li>
            <li className="footer__paydel">
              <a href="#">Гарантия и возврат</a>
            </li>
          </ul>
          <div className="footer__ordercall">
            <button className="footer__button">Заказать звонок</button>
            <div className="footer__tel">+38 (066) 611-45-78</div>
            <div className="footer__mail">nk@magicgoldfish.com</div>
            <div className="footer__social">
              <a href="#">
                <img src={insta} alt="instagram" />
              </a>
              <a href="#">
                <img src={vk} alt="vk" />
              </a>
              <a href="#">
                <img src={fb} alt="fb" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__hr"></div>
        <div className="footer__bottomcontent">
          <div className="footer__blockconfid">
            <div className="footer__magicgold">© 2021 MagicGoldFish.com</div>
            <div className="footer__confid">
              <a href="#">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="footer__pays">
            <div className="footer__wrapvisa">
              <img src={visa} alt="visa" />
            </div>
            <div className="footer__wrapmaster">
              <img src={master} alt="master" />
            </div>
          </div>
          <div className="footer__offerta">
            Содержимое не является публичной офертой
            <a href="#">
              <span> Пользовательское соглашение</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
