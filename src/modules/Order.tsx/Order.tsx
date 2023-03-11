import Image from "next/image";
import { OrderForm } from "./components";
import { OrderHead } from "./components/OrderHead";
import style from "./styles.module.scss";

const Order = () => {
  return (
    <section className={style.Order}>
      <OrderHead className={style.Order__head} />
      <OrderForm className={style.Order__form} />
      <Image src="/OrderBackground.png" alt="" fill objectFit="cover" />
    </section>
  );
};

export { Order };
