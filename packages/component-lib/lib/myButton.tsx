import 'react';
  
export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const MyButton: React.FC<ButtonProps> = () => {
  return (
    <button>I'm a button</button>
  );
};

export default MyButton;