import { EmailIcon, QiwiIcon, VkIcon, WebMoneyIcon, YandexIcon } from "@/icons";
import cn from "classnames";
import Link from "next/link";
import containerStyles from "../../styles/Home.module.scss";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div
        className={cn(
          `${containerStyles.Container} ${styles.Footer__container} ${containerStyles.Color__white} ${containerStyles.Font__13_16}`
        )}
      >
        <div>
          <p>© 2018 «LOREMIPSUM.NET» Все права защищены.</p>
        </div>
        <div className={styles.Footer__contentContainer}>
          <div
            className={cn(
              `${styles.Footer__paymentContainer} ${containerStyles.Color__lightGray}`
            )}
          >
            <div>
              <QiwiIcon />
              <span>Qiwi wallet</span>
            </div>
            <div>
              <YandexIcon />
              <span>Yandex Money</span>
            </div>
            <div>
              <WebMoneyIcon />
              <span>Web Money</span>
            </div>
          </div>
          <div className={styles.Footer__linksContainer}>
            <Link
              href="mailto:info@ipsum228.com
"
            >
              <EmailIcon />
              <span>info@ipsum228.com</span>
            </Link>
            <Link href="https://vk.com/feed" target="_blank">
              <VkIcon />
              <span>Мы вконтакте</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
