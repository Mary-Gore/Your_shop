const Popup = ({ isOpen, children, className }) => {
  return (
    <div className="popup">
      {isOpen && <div className={`popup__content ${className}`}>{children}</div>}
    </div>
  );
};

export default Popup;
