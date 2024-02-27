const Popup = ({ isOpen, children, className, popupLayout = false }) => {
  return (
    <div className={className ? `popup ${className}` : '`popup'}>
      {isOpen && (
        <div className={className ? `${className}__popup-content popup-content` : 'popup-content'}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Popup;
