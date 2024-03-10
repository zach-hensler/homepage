import {JSX, FunctionalComponent} from "preact";

interface CardRowProps {
    Cards: JSX.Element[]
}

export const CardRow:FunctionalComponent<CardRowProps> = ({ Cards }) => {
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
