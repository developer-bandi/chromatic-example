import styles from "./style.module.css";

type CardProps = {
  img: string;
  title: string;
};

const Card = ({ img, title }: CardProps) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="title" className={styles.image} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
