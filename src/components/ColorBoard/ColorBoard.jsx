import "./ColorBoard.css";

export const ColorBoard = ({ colorInfo }) => {
  const handleColorInfo = (colorInfo) => {
    console.log(colorInfo.length);
    if (colorInfo.length >= 5) {
      return (
        <>
          {colorInfo.slice(0, 5).map((color, index) => (
            <div className="color">{color}</div>
          ))}
          <div className="plus-icon">+</div>
        </>
      );
    } else {
      return colorInfo.map((color, index) => (
        <div className="color">{color}</div>
      ));
    }
  };

  return (
    <div className="container">
      <div className="color-picker">{handleColorInfo(colorInfo)}</div>
      <div className="heart-icon">&#9825;</div>
    </div>
  );
};
