import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const ShapeSvg = () => {
  return (
    <Svg
      width="237"
      height="128"
      viewBox="0 0 237 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 -0.924004C0 51.8 15.5 89.562 73 113.953C130.5 138.344 186.055 116.087 241.786 128.847C297.517 141.607 297.517 223.809 350 274.396C402.483 324.983 513.142 337.27 603.12 285.948C693.095 234.626 733.884 114.796 707 44.141C680.115 -26.515 628.593 -91 380 -91C131.407 -91 0 -53.647 0 -0.924004Z"
          fill="#4B3F6B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="237" height="128" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShapeSvg;
