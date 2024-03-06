import classes from './button.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.main}>
      {children}
    </button>
  );
};
export default Button;
