import React from "react";
import CustomAnimatedCursor from "react-animated-polyline-cursor";



export default function Mouse() {
  CustomAnimatedCursor.defaultProps = {
    dotColor: "#000",
    dotSize: 8,
    dotReductionRatio: 0.25,
    lineColor: "#000",
    lineDelay: 2,
    lineLength: 12,
    lineWidth: 2,
    markerSize: 24,
    markerColor: "#fff",
    removeCursorElements: ["a", "input", "label", "select", "textarea", "button"],
    markerBlendMode: true,
};
  return (
    <div>
    <CustomAnimatedCursor
                dotColor={"#2AFADF"}
                lineColor={"#2AFADF"}
                markerColor={"#2AFADF"}
                dotSize= {8}
                markerBlendMode = {true}
            />
    </div>
  );
}