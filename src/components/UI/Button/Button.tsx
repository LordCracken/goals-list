import { IButton } from '../../../interfaces';
import './Button.css';

const Button = ({ children, type, onClick }: IButton) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
