import React from "react";

interface CardRowProps {
    CardOne: JSX.Element
    CardTwo: JSX.Element
}

export const CardRow:React.FC<CardRowProps> = ({
    CardOne,
    CardTwo,
}) => {
    return (
        <div className="card-row">
            <div className="card-row-child">
                {CardOne}
            </div>
            <div className="card-row-child">
                {CardTwo}
            </div>
        </div>
    );
};
