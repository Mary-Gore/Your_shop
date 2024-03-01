const Modal = ({ isOpen, children, onClose, resetColor, resetSize }) => {
  const onWrapperClick = e => {
    if (e.target.classList.contains('modal__wrapper')) {
      onClose();
      resetColor();
      resetSize();
    }
  };
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__wrapper" onClick={onWrapperClick}>
            {isOpen && <div className="modal__content">{children}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
