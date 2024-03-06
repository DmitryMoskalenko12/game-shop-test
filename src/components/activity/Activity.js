import './activity.scss';
import { useEffect, useState } from 'react';
import { fetchServerData } from '../../helpers/helpers';
import { activity } from '../../dummy-data/dummy-data';

const Activity = () => {
  const [baseLength, setBaseLength] = useState([]);

  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = () => {
    const res = fetchServerData(limit, page, activity);
    setData([...data, ...res])
    if (!res) {
      setError(true)
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    setBaseLength(activity);
  }, []);

  const fail = error ? (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>Error</div>
  ) : null;
  const content = !error
    ? data.map(({ img, descr1, path, date, descr2, id }) => {
        return (
          <div key={id} className="activity__card">
            <div className="activity__wrapimg">
              <picture>
                <source src="#" />
                <img src={img} alt={descr1} width="563px" height="434px" />
              </picture>
            </div>
            <a href={path}>
              <div className="activity__descr">
                <div className="activity__subdescr">
                  <div className="activity__nameactivity">{descr1}</div>
                  <div className="activity__date">{date}</div>
                </div>
                <div className="activity__maindescr">{descr2}</div>
              </div>
            </a>
          </div>
        );
      })
    : null;
  return (
    <section className="activity">
      <div className="container">
        <h1 className="activity__title">Ближайшие мероприятия</h1>
        <div className="activity__wrap">
          {fail}
          {content}
        </div>
        <button
          className="activity__button"
          onClick={() => {
            setPage(page + 1);
          }}
          style={{
            display: data.length === baseLength.length ? 'none' : 'block',
          }}
        >
          Показать еще
        </button>
      </div>
    </section>
  );
};
export default Activity;
