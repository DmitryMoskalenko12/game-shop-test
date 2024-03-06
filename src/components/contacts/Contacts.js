import './contacts.scss';
import phone from '../../icons/addrphone.png';
import mail from '../../icons/letter.png';
import clock from '../../icons/clock.png';
import geolocation from '../../icons/geoloc.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { status } from './contactsSlice';
import { post } from '../../post/post';

const Contacts = () => {
  let statuss = useSelector((state) => state.contacts.status);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [comment, setComment] = useState('');

  const onMessage = (e) => {
    e.preventDefault();
    const result = {
      name,
      tel,
      comment,
      id: Date.now(),
    };
    dispatch(status('loading'))
    post(result).then(res => {
    dispatch(status('fulfilled'))
    setTimeout(() => dispatch(status(null)), 3000);
    setName('');
    setTel('');
    setComment('');
    })
    .catch(e => {
      setTimeout(() => dispatch(status(null)), 3000);
    })

  };

  const loading = statuss === 'loading' ? 'Данные отправляются' : null;
  const success = statuss === 'fulfilled' ? 'Данные успешно отправлены' : null;
  const fail =
    statuss === 'error' ? 'Произошла ошибка при отправке данных' : null;

  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrap">
          <div className="contacts__addrform">
            <h2 className="contacts__title">Контакты</h2>
            <address className="address">
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <picture>
                    <source src="#" />
                    <img src={phone} alt="phone" width="27px" height="27px" />
                  </picture>
                </div>
                <div className="contacts__info">
                  {' '}
                  <span>Телефон:</span>+380 (95) 611-76-93
                </div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <picture>
                    <source src="#" />
                    <img src={mail} alt="email" width="27px" height="27px" />
                  </picture>
                </div>
                <div className="contacts__info">
                  <span>E-mail:</span>nsk@magicgoldfish.com
                </div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <picture>
                    <source src="#" />
                    <img
                      src={geolocation}
                      alt="geolocation"
                      width="27px"
                      height="27px"
                    />
                  </picture>
                </div>
                <div className="contacts__info">
                  <span>Адрес:</span>г. Николаев, ул. Малая Морская 6
                </div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <picture>
                    <source src="#" />
                    <img src={clock} alt="clock" width="27px" height="27px" />
                  </picture>
                </div>
                <div className="contacts__info">
                  <span>Режим работы клуба:</span> 11:00-23:00 (ежедневно)
                </div>
              </div>
            </address>
            <div className="contacts__question">Остались вопросы?</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onMessage(e);
              }}
              className="contacts__form"
            >
              <label className="contacts__name">
                <div>Ваше имя</div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  required
                  placeholder="Имя"
                />
              </label>
              <label className="contacts__telefon">
                <div>Ваш телефон</div>
                <input
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  type="number"
                  name="phone"
                  required
                  placeholder="+38 ___ _______"
                />
              </label>
              <label className="contacts__comment">
                <div>Ваш комментарий</div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  name="comment"
                  placeholder="Комментарий"
                />
              </label>

              <button className="contacts__subm">Заказать звонок</button>
              {loading}
              {success}
              {fail}
            </form>
            <div className="contacts__confid">
              Нажимая на кнопку "Заказать звонок", я даю{' '}
              <span>согласие на </span>
              обработку персональных данных.
            </div>
          </div>

          <div className="contacts__wrapimg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174280.12207387915!2d31.93965993672836!3d46.959196516579745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5cb89fb7213d5%3A0x970e39fab9e05680!2z0J3QuNC60L7Qu9Cw0LXQsiwg0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1NDAwMA!5e0!3m2!1sru!2sua!4v1692554762586!5m2!1sru!2sua" width="600" height="450" style={{'border': 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
