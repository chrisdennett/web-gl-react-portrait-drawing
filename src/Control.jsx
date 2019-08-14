import React from "react";

const Control = ({ name, value, onChange, min = 0, max = 2, step = 0.05 }) => {
  const update = e => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const containerStyle = { display: "flex" };
  const titleStyle = {
    width: 100,
    fontWeight: "normal",
    fontSize: 12,
    textTransform: "uppercase"
  };
  const inputStyle = { flex: "1 1 0%", width: "100%" };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>
        {name} {value}
      </h3>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        style={inputStyle}
        onChange={update}
      />
    </div>
  );
};
export default Control;
