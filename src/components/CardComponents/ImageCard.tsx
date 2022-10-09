import React from 'react';

import '../../css/App.css';
import '../../css/Card.css';

interface ImageCardProps {
    imageSource: string
    imageAltText: string
    imageSide: 'left'|'right'
    headerText: string
    cardBody: string|JSX.Element
}

export const ImageCard:React.FC<ImageCardProps> = ({
    imageSource,
    imageAltText,
    imageSide,
    headerText,
    cardBody
}) => {
    const imageClass = `card-image ${imageSide === 'right' ? 'float-right' : ''}`
    const image = <img src={imageSource} alt={imageAltText} className={imageClass} />;

    const bodyClass = `card-body-container ${imageSide === 'right' ? '' : 'float-right'}`
    const bodyContent = (
        <div className={bodyClass}>
            <h3>{headerText}</h3>
            <hr />
            {cardBody}
        </div>
    );

    return (
        <div className='card-container'>
            {image}
            {bodyContent}
        </div>
    )
}