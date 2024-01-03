import style from "./style.module.css";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return <button className={style.container}>{name}</button>;
};

export default Button;
