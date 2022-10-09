import { IButton } from '../../../interfaces';
import classes from './Button.module.css';

const Button = ({ children, type, onClick }: IButton) => {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
