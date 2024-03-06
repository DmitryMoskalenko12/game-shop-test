import './accordion.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

const Accordion = () => {

  const accordionData = useSelector((state) => state.accordion.accordionData);
  const [activeQuestion, setActiveQuestion] = useState('');
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState('');
  const linkRef = useRef([]);

  useEffect(() => {
    setHeight(linkRef.current.scrollHeight);
  }, [activeQuestion]);

  return (
    <section className="accordion">
      <div className="container">
        <div className="accordion__wrap-questions">
          {accordionData.map(({ question, answer, id }, i) => {
            return (
              <div key={id} className="accordion__content">
                <button
                  onClick={(e) => {
                    setActiveQuestion(e.target.textContent);
                    setToggle(activeQuestion === question ? !toggle : true);
                  }}
                  className={
                    toggle && activeQuestion === question
                      ? 'accordion__question-active'
                      : 'accordion__question'
                  }
                >
                  {question}
                </button>
                <p
                  style={{
                    height:
                      toggle && activeQuestion === question
                        ? `${height}px`
                        : '',
                  }}
                  ref={toggle && activeQuestion === question ? linkRef : null}
                  className={
                    toggle && activeQuestion === question
                      ? 'accordion__answer-active'
                      : 'accordion__answer'
                  }
                >
                  {answer}
                </p>
                <hr
                  style={{
                    display: id === accordionData.length ? 'none' : 'block',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Accordion;
