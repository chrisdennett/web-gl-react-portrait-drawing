//@flow
import React from "react";
import { Surface } from "gl-react-dom";
import { Negative } from "gl-react-negative";
import { Blur } from "./BlurEffect";
import { ContrastBrightnessEffect } from "./ContrastBrightnessEffect";

const WebGLCanvas = React.forwardRef(
  ({ sourceUrl, imgWidth, imgHeight, settings, onReady }, ref) => {
    const { contrast, brightness, negative, blur } = settings;

    return (
      <Surface
        ref={ref}
        onLoad={onReady}
        width={imgWidth}
        height={imgHeight}
        webglContextAttributes={{ preserveDrawingBuffer: true }}
      >
        <ContrastBrightnessEffect contrast={contrast} brightness={brightness}>
          <Negative factor={negative}>
            <Blur factor={blur} passes={6}>
              {sourceUrl}
            </Blur>
          </Negative>
        </ContrastBrightnessEffect>
      </Surface>
    );
  }
);

export default WebGLCanvas;

//https://i.imgur.com/uTP9Xfr.jpg

//float greyscale (vec3 c) { return 0.2125 * c.r + 0.7154 * c.g + 0.0721 * c.b; }
