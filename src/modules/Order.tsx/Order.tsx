import {
  DragDropIcon,
  MailIcon,
  PercentIcon,
  PriceIcon,
  SearchIcon,
} from "@/icons";

const Order = () => {
  return (
    <div>
      <h2>Оформление Заказа</h2>
      <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
      <ul className="">
        <li>
          <SearchIcon />
        </li>
        <li>
          <PercentIcon />
        </li>
        <li>
          <DragDropIcon />
        </li>
        <li>
          <MailIcon />
        </li>
        <li>
          <PriceIcon />
        </li>
      </ul>
    </div>
  );
};

export { Order };
