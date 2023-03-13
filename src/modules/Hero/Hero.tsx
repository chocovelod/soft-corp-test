import { Button } from "@/components/Button/Button";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import containerStyles from "../../styles/Home.module.scss";
import styles from "./styles.module.scss";
interface Props {
  className?: string;
}

const Hero: FC<Props> = ({ className }) => {
  return (
    <section className={styles.Hero}>
      <div
        className={cn(`${styles.Hero__content} ${containerStyles.Container}`)}
      >
        <h1
          className={cn(
            `${styles.Hero__title} ${containerStyles.Font__48_57_700}`
          )}
        >
          <span className={styles.Color__blue}>Lorem ipsum</span> dolor sit{" "}
          <br />
          amet consectetur{" "}
          <span className={styles.Color__blue}>adipiscing</span>
        </h1>
        <h1 className={styles.Hero__title_mobile}>
          <span className={styles.Color__blue}>Lorem ipsum</span> dolor sit amet
          consectetur <span className={styles.Color__blue}> sadipiscing</span>
        </h1>
        <ul className={styles.Hero__list}>
          <p
            className={cn(
              `${styles.Hero__list_title} ${containerStyles.Font__20_24_700}`
            )}
          >
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
      <div className={containerStyles.FullBleed}>
        <div className={styles.Hero__background} />
        <Image
          className={styles.Hero__image}
          src="/HeroImage.jpg"
          alt=""
          fill
          priority
        />
      </div>
    </section>
  );
};

export { Hero };
