import {JSX, FunctionalComponent} from "preact";

import "../../css/App.css";
import "../../css/Card.css";

interface ImageCardProps {
    addImageBackground?: boolean
    imageSource: string
    imageAltText: string
    imageSide: "left"|"right"
    headerText: string
    cardBody: string|JSX.Element
}

export const ImageCard:FunctionalComponent<ImageCardProps> = ({
    addImageBackground = false,
    imageSource,
    imageAltText,
    imageSide,
    headerText,
    cardBody,
}) => {
    const image = <img
        src={imageSource}
        alt={imageAltText}
        class={`card-image ${addImageBackground ? "white" : ""}`}
    />;

    const bodyContent = (
        <div class="card-body-container">
            <h3>{headerText}</h3>
            <hr />
            {cardBody}
        </div>
    );

    const imageCardBody = imageSide === "left"
        ? <>{image}{bodyContent}</>
        : <>{bodyContent}{image}</>;

    return (
        <div class="image-card-container">
            {imageCardBody}
        </div>
    );
};
