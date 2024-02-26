const ButtonFill = ({ children, className, onClick }) => {
  return (
    <button className={className ? `${className} btn-fill` : 'btn-fill'} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonFill;
