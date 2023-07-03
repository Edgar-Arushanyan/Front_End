import React from "react";
import { useSelector } from "react-redux";
import { selectItemsData } from "../redux/slices/itemsSlice";
import Card, { CardItem } from "./Card";
import Skeleton from "./Skeleton";

//типизируем пропсы
type CardsProps = {
  title: string;
};


//создаём компонент Cards типизируем его и пропсы данного компонента с помощью деструктуризации пропсов получаю необходимые сущности
//Описывает логику и пользовательский интерфейс всех карточек с товаром
const Cards: React.FC<CardsProps> = ({ title }) => {

 // достаю из глобального состояня необходимые щначения
  const { items, status } = useSelector(selectItemsData);

  return (
    <section className="cards">
      <h2 className="title cards__title">{title}</h2>
      {status === "error" ? (
        <p className="cards__error">
          Данные не загрузились :( Попробуйте зайти позже
        </p>
      ) : (
        <div className="cards__list">
          {status === "loading"
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((item: CardItem) => <Card {...item} key={item.id} />)}
        </div>
      )}
    </section>
  );
};

export default Cards;
