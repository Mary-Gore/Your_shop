const TopBar = () => {
  return (
    <div className="top-bar">
      <button className="top-bar__location-btn">Москва</button>
      <div className="search-form-wrap">
        <form id="search-form" className="search-form">
          <button className="search-form__btn" type="submit"></button>
          <input className="search-form__input" type="search" placeholder="Найти..." />
        </form>
      </div>
      <div className="top-bar__login">
        <button className="top-bar__sign-in-btn">Вход</button>
        {/* <button className="top-bar__log-out-btn">Выход</button> */}
      </div>
    </div>
  );
};

export default TopBar;
