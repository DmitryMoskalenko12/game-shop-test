import './modal.scss';

const Modal = (props) => {
  return (
    <div
      onClick={(e) => {
        props.setModal(false);
      }}
      className="modal"
    >
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        {props.children}
      </div>
    </div>
  );
};
export default Modal;
