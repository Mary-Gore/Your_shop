const RoundColor = ({ className, color, style }) => {
  return (
    <span
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
    ></span>
  );
};

export default RoundColor;
