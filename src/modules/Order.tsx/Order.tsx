import Image from "next/image";
import containerStyles from "../../styles/Home.module.scss";
import { OrderForm } from "./components";
import { OrderHead } from "./components/OrderHead";
import style from "./styles.module.scss";

const Order = () => {
  return (
    <section className={style.Order}>
      <div className={containerStyles.Container}>
        <OrderHead className={style.Order__head} />
        <OrderForm className={style.Order__form} />
        <Image src="/OrderBackground.png" alt="" fill objectFit="cover" />
      </div>
    </section>
  );
};

export { Order };
