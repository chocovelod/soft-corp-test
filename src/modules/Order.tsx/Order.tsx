import Image from "next/image";
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
        <Image src="/OrderBackground.png" alt="" fill objectFit="cover" />
      </div>
    </section>
  );
};

export { Order };
