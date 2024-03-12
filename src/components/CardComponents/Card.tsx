import {FunctionalComponent, JSX} from "preact";

import "../../css/Card.css";

export interface CardProps {
    cardHeader?: string
    cardBody: JSX.Element|string
    buttonText?: string
    selected?: boolean
    onClick?: () => void
}

export const Card: FunctionalComponent<CardProps> = ({
    cardHeader,
    cardBody,
    buttonText,
    selected,
    onClick = () => undefined,
}) => {
    const button = (buttonText && onClick)
        ? (
            <div class="card-button-container">
                <button class="card-button" onClick={onClick}>{buttonText}</button>
            </div>
        )
        : <></>;

    const header = cardHeader
        ? <><h3>{cardHeader}</h3><hr class="card-divider"/></>
        : <></>;

    return (
        <div class={`card-container ${selected ? "selected" : ""}`}>
            {header}
            <div class="card-body">{cardBody}</div>
            {button}
        </div>
    );
};
