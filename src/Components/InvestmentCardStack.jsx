import React, { useState } from "react";
import InvestmentCard from "../Components/InvestmentCard";
import { investmentCardsData } from "../Constant/Data";

export default function InvestmentCardStack() {
  const [revealedCount, setRevealedCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const revealNext = () => {
    setRevealedCount((prev) => {
      if (prev >= investmentCardsData.length) return prev;
      const next = prev + 1;
      setActiveIndex(next - 1);
      return next;
    });
  };

  const handleCardClick = (index) => {
    if (index < revealedCount) setActiveIndex(index);
  };

  return (
    <div className="investment-card-stack">
      {investmentCardsData.map((card, index) => {
        const isRevealed = index < revealedCount;
        if (!isRevealed) return null; // HARD STOP (this guarantees only revealed cards render)

        const isActive = index === activeIndex;
        const isLastRevealed = index === revealedCount - 1;
        const isLastCard = index === investmentCardsData.length - 1;

        return (
          <React.Fragment key={card.id}>
            <InvestmentCard
              image={card.image}
              title={card.title}
              description={card.description}
              onClick={() => handleCardClick(index)}
              isActive={isActive}
              showArrow={isLastRevealed && !isLastCard}
              onArrowClick={revealNext}
            />

            {!isLastCard && <div className="card-spacer" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
