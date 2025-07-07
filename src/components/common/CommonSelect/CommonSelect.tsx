import React from "react";
import { Select } from "antd";
import "./CommonSelect.scss";

interface Option {
  label: string;
  value: string | number;
}

interface CommonSelectProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  label,
  required = false,
  placeholder = "Select Category",
  options,
  value,
  onChange,
  className = "",
  style,
}) => {
  return (
    <div className={`common-select-wrapper ${className}`}style={style}>
      <label className="common-select-label">
        {label}
        {required && <span>*</span>}
      </label>
      <Select
        className="common-select"
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
        size="large"
         classNames={{ popup: { root: "common-select-dropdown" } }} 
        // dropdownClassName="common-select-dropdown"
      />
    </div>
  );
};

export default CommonSelect;