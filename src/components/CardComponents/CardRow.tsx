import React from "react";

interface CardRowProps {
    Cards: JSX.Element[]
}

export const CardRow:React.FC<CardRowProps> = ({ Cards }) => {
    const cardChildren = Cards.map((card, idx) => (
        <div key={`card-row-item-${idx}`} className="card-row-child">
            {card}
        </div>
    ));

    return (
        <div className="card-row">
            {cardChildren}
        </div>
    );
};
