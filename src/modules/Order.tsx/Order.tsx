import containerStyles from "../../styles/Home.module.scss";
import { OrderForm } from "./components";
import { OrderHead } from "./components/OrderHead";
import styles from "./styles.module.scss";

const Order = () => {
  return (
    <section className={styles.Order}>
      <div className={containerStyles.Container}>
        <OrderHead className={styles.Order__head} />
        <OrderForm className={styles.Order__form} />
        <div className={containerStyles.FullBleed}>
          <img
            src="./OrderBackground.png"
            alt=""
            className={styles.Order__background}
          />
        </div>
      </div>
    </section>
  );
};

export { Order };
