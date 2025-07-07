interface SignInButtonProps {
  onClick: () => void;
  style: React.CSSProperties;
  title: string;
}

const SignInButton = ({ onClick, style, title }: SignInButtonProps) => {
  return (
    <button onClick={() => onClick()} style={style}>
      {title}
    </button>
  );
};

export default SignInButton;
