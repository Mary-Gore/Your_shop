const ButtonStroke = ({ children, className }) => {
  return (
    <button className={className ? `${className} btn-stroke` : 'btn-stroke'}>{children}</button>
  );
};

export default ButtonStroke;
