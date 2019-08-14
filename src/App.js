import React, { useRef, useState, useEffect } from "react";
import WebGLCanvas from "./WebGLCanvas";
import ToolBox from "./ToolBox";
import ErrorBoundary from "./ErrorBoundary";
//https://www.freecodecamp.org/news/sketchify-turn-any-image-into-a-pencil-sketch-with-10-lines-of-code-cf67fa4f68ce/

const canvasWidth = 371 * 0.5;
const canvasHeight = 625 * 0.5;
const imgName = "jen-crop.jpg";

const App = () => {
  const canvasRef = useRef();
  const wRef = React.createRef();
  const wRef2 = React.createRef();
  const [settings, updateSettings] = useState(defaultSettings);
  const [settings2] = useState(defaultSettings2);

  useEffect(() => {
    updateCanvas();
  });

  const updateCanvas = () => {
    // only needed for the first render.
    const ctx = canvasRef.current.getContext("2d");
    const webGlCanvas = wRef.current.gl.canvas;
    const webGlCanvas2 = wRef2.current.gl.canvas;
    ctx.globalCompositeOperation = "copy";
    ctx.clearRect(0, 0, webGlCanvas.width, webGlCanvas.height);
    ctx.drawImage(webGlCanvas, 0, 0);
    ctx.globalCompositeOperation = "color-dodge";
    ctx.drawImage(webGlCanvas2, 0, 0);
  };

  const onWebCanvasReady = () => {
    // probably a better way to ensure first draw!
    setTimeout(() => {
      updateCanvas();
    }, 300);
  };

  const onUpdate = newValue => {
    updateSettings({ ...settings, ...newValue });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "red 1px solid" }}
      />
      <ToolBox settings={settings} onUpdate={onUpdate} />
      <ErrorBoundary>
        <WebGLCanvas
          ref={wRef}
          onReady={onWebCanvasReady}
          sourceUrl={imgName}
          imgWidth={canvasWidth}
          imgHeight={canvasHeight}
          settings={settings2}
        />
      </ErrorBoundary>
      <ErrorBoundary>
        <WebGLCanvas
          ref={wRef2}
          onReady={onWebCanvasReady}
          sourceUrl={imgName}
          imgWidth={canvasWidth}
          imgHeight={canvasHeight}
          settings={settings}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;

const defaultSettings = {
  blur: 3,
  negative: 2,
  contrast: 0.65,
  brightness: 0.65
};

const defaultSettings2 = {
  blur: 0,
  negative: 0,
  contrast: 1,
  brightness: 1.3
};
