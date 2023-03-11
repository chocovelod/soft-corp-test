import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

const Hero: FC<Props> = ({ className }) => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__content}>
        <h1 className={styles.Hero__title}>
          <span className={styles.Color__blue}>Lorem ipsum</span> dolor sit{" "}
          <br />
          amet consectetur{" "}
          <span className={styles.Color__blue}>adipiscing</span>
        </h1>
        <ul className={styles.Hero__list}>
          <p className={styles.Hero__list_title}>
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </p>
          <li>- Totam rem aperiam eaque ipsa</li>
          <li>- Sit voluptatem accusantium doloremque laudantium</li>
          <li>- Sed ut perspiciatis, unde omnis iste natus error</li>
        </ul>
        <div className={styles.Hero__buttonsContainer}>
          <Button>заказать</Button>
          <Button className={styles.Hero__secondButton}>подробнее</Button>
        </div>
      </div>

      <div>
        <Image
          className={styles.Hero__image}
          src="/HeroImage.jpg"
          alt=""
          fill
          objectPosition="right"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { Hero };
