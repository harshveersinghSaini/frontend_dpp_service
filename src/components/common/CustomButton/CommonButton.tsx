import React from 'react';
import "./CommonButton.scss"
import type { CustomButtonProps } from '@/Interfaces/Interfaces';

const CustomButton = ({
  text,
  width,
  height,
  onClick,
  style,
  className,
  type,
  icon
} : CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`custom-button ${className ? className : ''}`}
      style={{
        width: width,
        height : height,
        ...style,
      }}
    >
      {icon && <span className="custom-button__icon">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;