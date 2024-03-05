const ButtonStroke = ({ children, className, onClick, prod }) => {
  return (
    <button
      className={className ? `${className} btn-stroke` : 'btn-stroke'}
      onClick={() => onClick(prod)}
    >
      {children}
    </button>
  );
};

export default ButtonStroke;
