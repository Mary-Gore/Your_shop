const RoundColor = ({ className, color, style }) => {
  return (
    <li
      style={style}
      className={
        color === 'white'
          ? className
            ? `${className} color-icon color-icon_white`
            : 'color-icon_white'
          : className
            ? `${className} color-icon`
            : 'color-icon'
      }
    ></li>
  );
};

export default RoundColor;
