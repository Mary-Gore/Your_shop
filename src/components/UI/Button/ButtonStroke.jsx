const ButtonStroke = ({ children, className, onClick }) => {
  return (
    <button className={className ? `${className} btn-stroke` : 'btn-stroke'} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonStroke;
