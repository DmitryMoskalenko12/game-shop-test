import './cardInformation.scss';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const CardInformation = ({ objectCardData }) => {
  const buttons = [
    { clazz: 'card-information__but', descr: 'Описание', id: 1 },
    { clazz: 'card-information__but', descr: 'Характеристики', id: 2 },
    { clazz: 'card-information__but', descr: 'Правила', id: 3 },
    { clazz: 'card-information__but', descr: 'Вопрос-ответ', id: 4 },
  ];
  const questAnswerData = useSelector(
    (state) => state.answerQuestion.answerQuestionData
  );
  const [activeQuestion, setActiveQuestion] = useState('');
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState('');
  const linkRef = useRef([]);

  const [nameButton, setNameButton] = useState('Вопрос-ответ');
  const [descr, setDescr] = useState(0);
  const [charact, setCharact] = useState(0);
  const [rules, setRules] = useState(0);
  const [ansQuest, setAnsQuest] = useState(0);
  const ansQuestRef = useRef();
  const descrRef = useRef();
  const charactRef = useRef();
  const rulesRef = useRef();

  useEffect(() => {
    setDescr(descrRef.current.scrollHeight);
    setCharact(charactRef.current.scrollHeight);
    setRules(rulesRef.current.scrollHeight);
    setAnsQuest(rulesRef.current.scrollHeight);
  }, [nameButton]);

  useEffect(() => {
    setHeight(linkRef.current.scrollHeight);
  }, [activeQuestion]);

  return (
    <div className="card-information">
      <div className="card-information__block-buttons">
        {buttons.map(({ clazz, descr, id }) => {
          return (
            <button
              onClick={() => setNameButton(descr)}
              key={id}
              className={`${nameButton === descr ? 'but-active' : clazz}`}
            >
              {descr}
            </button>
          );
        })}
      </div>
      <hr />
      <div
        ref={descrRef}
        style={{ height: nameButton === 'Описание' ? `${descr}px` : '' }}
        className={
          nameButton === 'Описание'
            ? 'card-information__descr-active'
            : 'card-information__descr'
        }
      >
        {objectCardData?.descrGame}
      </div>
      <div
        ref={charactRef}
        style={{
          height: nameButton === 'Характеристики' ? `${charact}px` : '',
        }}
        className={
          nameButton === 'Характеристики'
            ? 'card-information__charact-active'
            : 'card-information__charact'
        }
      >
        {objectCardData?.characteristic}
      </div>
      <div
        ref={rulesRef}
        style={{ height: nameButton === 'Правила' ? `${rules}px` : '' }}
        className={
          nameButton === 'Правила'
            ? 'card-information__rules-active'
            : 'card-information__rules'
        }
      >
        {objectCardData?.characteristic}
      </div>
      <div
        ref={ansQuestRef}
        style={{
          minHeight: nameButton === 'Вопрос-ответ' ? `${ansQuest}px` : '',
        }}
        className={
          nameButton === 'Вопрос-ответ'
            ? 'card-information__quest-active'
            : 'card-information__quest'
        }
      >
        {questAnswerData.map(({ question, answer, id }, i) => {
          return (
            <div key={id} className="card-information__content">
              <button
                onClick={(e) => {
                  setActiveQuestion(e.target.textContent);
                  setToggle(activeQuestion === question ? !toggle : true);
                }}
                className={
                  toggle && activeQuestion === question
                    ? 'card-information__question-active'
                    : 'card-information__question'
                }
              >
                {question}
              </button>
              <p
                style={{
                  height:
                    toggle && activeQuestion === question ? `${height}px` : '',
                }}
                ref={toggle && activeQuestion === question ? linkRef : null}
                className={
                  toggle && activeQuestion === question
                    ? 'card-information__answer-active'
                    : 'card-information__answer'
                }
              >
                {answer}
              </p>
              <hr
                style={{
                  display: id === questAnswerData.length ? 'none' : 'block',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardInformation;
