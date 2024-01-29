import React from "react";

import "../../css/Card.css";

export interface CardProps {
    cardHeader?: string
    cardBody: JSX.Element|string
    buttonText?: string
    selected?: boolean
    onClick?: () => void
}

export const Card:React.FC<CardProps> = ({
    cardHeader,
    cardBody,
    buttonText,
    selected,
    onClick = () => undefined,
}) => {
    const button = (buttonText && onClick)
        ? (
            <div className="card-button-container">
                <button className="card-button" onClick={onClick}>{buttonText}</button>
            </div>
        )
        : <></>;

    const header = cardHeader
        ? <><h3>{cardHeader}</h3><hr /></>
        : <></>;

    return (
        <div className={`card-container ${selected ? "selected" : ""}`}>
            {header}
            {cardBody}
            {button}
        </div>
    );
};
