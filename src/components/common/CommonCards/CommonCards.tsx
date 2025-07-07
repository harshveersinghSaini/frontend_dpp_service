import React from "react";
import "./CommonCards.scss";

type CardData = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
};

type CommonCardsProps = {
  cards: CardData[];
  withIcons?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const CommonCards: React.FC<CommonCardsProps> = ({
  cards,
  withIcons,
  style,
  className,
}) => (
  <div
    className={`common-cards${
      withIcons ? " with-icons" : ""
    }${className ? ` ${className}` : ""}`}
    style={style}
  >
    {cards.map((card, idx) => (
      <div className="common-card" key={idx}>
        {withIcons && card.icon && (
          <div className="card-icon">{card.icon}</div>
        )}
        <div className="card-label">{card.label}</div>
        <div className="card-value">{card.value}</div>
      </div>
    ))}
  </div>
);

export default CommonCards;