import styles from "./styles.module.scss";

const HeaderMenu = () => {
  return (
    <nav className={styles.Header__menu}>
      <p>Бизнес</p>
      <p>О нас</p>
      <p>Цены</p>
      <p>Оформить заказ</p>
    </nav>
  );
};

export { HeaderMenu };
