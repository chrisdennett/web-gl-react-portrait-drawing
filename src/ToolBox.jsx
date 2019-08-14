import React from "react";
import Control from "./Control";

const ToolBox = ({ settings, onUpdate }) => {
  const { contrast, brightness, saturation, hue, negative, blur } = settings;

  return (
    <div>
      <Control
        name={"Blur"}
        value={blur}
        onChange={value => onUpdate({ blur: value })}
        max={8}
      />
      <Control
        name={"Negative"}
        value={negative}
        onChange={value => onUpdate({ negative: value })}
      />
      <Control
        name={"Contrast"}
        value={contrast}
        onChange={value => onUpdate({ contrast: value })}
      />
      <Control
        name={"Brightness"}
        value={brightness}
        onChange={value => onUpdate({ brightness: value })}
      />
    </div>
  );
};
export default ToolBox;
