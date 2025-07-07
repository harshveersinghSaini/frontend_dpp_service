// Common Button //
export interface CustomButtonProps {
  text?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}