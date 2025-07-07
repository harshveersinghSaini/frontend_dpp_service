"use client";
import React, { useState } from "react";
import "./InputCustom.scss";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


interface InputCustomProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  id?: string;
  name?: string;
  important?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCustom: React.FC<InputCustomProps> = ({
  label,
  placeholder,
  type = "text",
  id,
  important,
  name,
  value,
  onChange,
}) => {

const [showPassword, setShowPassword] = useState(false);



const togglePasswordVisibility = () => setShowPassword(!showPassword);

// Only toggle between 'text' and 'password' if type is password
const inputType = type === "password" && showPassword ? "text" : type;

return (
  <div className={`input-custom`}>
    {label && <label htmlFor={id}>{label}  {important && <span className="required-star"> *</span>}</label>}

    <div className={`input-wrapper`}>
      <input
        id={id}
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {type === "password" && (
        <span className="toggle-password" onClick={togglePasswordVisibility}>
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
      )}
    </div>
  </div>
);

};

export default InputCustom;
