import React from "react";

import "../../css/Card.css";

export interface CardProps {
    cardHeader: string
    cardBody: JSX.Element|string,
    buttonText?: string,
    onButtonClick?: () => void
}

export const Card:React.FC<CardProps> = ({
    cardHeader,
    cardBody,
    buttonText,
    onButtonClick,
}) => {
    const button = (buttonText && onButtonClick) ? (
        <div className="card-button-container">
            <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
        </div>
    ) : <></>;

    return (
        <div className="card-container">
            <h3>{cardHeader}</h3>
            <hr />
            {cardBody}
            {button}
        </div>
    );
};
