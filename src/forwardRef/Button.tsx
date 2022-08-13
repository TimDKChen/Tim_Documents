type ButtonPropsType = {
  children: any;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonPropsType) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
