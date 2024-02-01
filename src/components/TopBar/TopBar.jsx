const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__location">
        <select>
          <option>Москва</option>
          <option>Владивосток</option>
          <option>Самара</option>
          <option>Тольятти</option>
        </select>
        <input type="text" placeholder="search" />
        <div className="top-bar__login">
          <button className="top-bar__sign-in-btn">Вход</button>
          {/* <button className="top-bar__log-out-btn">Выход</button> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
