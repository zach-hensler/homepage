import React, { useEffect, useState } from "react";

import "../css/ShowMe.css";
import { Card, CardRow } from "../components";
import { animalTypes } from "../helperFunctions";

type animalImage = { imageSource?: string, imageType?: string, id?: number }

export const ShowMe = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [animalType, setAnimalType] = useState<{name?: string, fetch?: () => Promise<string|void>}>({});
    const [animalImage, setAnimalImage] = useState<animalImage>({});
    const [imageHistory, setImageHistory] = useState<animalImage[]>([]);
    const [newAnimalClickCount, setNewAnimalClickCount] = useState<number>(0);

    const getRandomThingType = () => {
        const newAnimalIndex = Math.floor(Math.random() * animalTypes.length);
        setAnimalType({ ...animalTypes[newAnimalIndex] });
    };

    const pushImageToHistory = (image: animalImage) => {
        setImageHistory(prevHistory => [image, ...prevHistory].slice(0,4));
    };

    useEffect(() => {
        if (!animalType?.fetch) return;

        setLoading(true);
        animalType.fetch()
            .then(image => {
                if (!image) { return; }

                const newAnimalImage = { imageSource: image, imageType: animalType.name, id: newAnimalClickCount };
                setAnimalImage(newAnimalImage);
                pushImageToHistory(newAnimalImage);
                setNewAnimalClickCount(prevClickCount => prevClickCount + 1);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [animalType]);

    const renderHistoryImages = () => {
        return (
            <CardRow
                Cards={
                    imageHistory.map((animalImage) => (
                        <Card
                            cardBody={
                                <img src={animalImage.imageSource} className="historyImageCard" />
                            }
                            onClick={() => setAnimalImage(animalImage)}
                            key={`image-${animalImage.id}`}
                        />
                    ))
                }
            />
        );
    };

    return (
        <div>
            <h2>Show me a ... {animalImage?.imageType}</h2>
            <div><button disabled={loading} onClick={getRandomThingType}>{loading ? "Loading..." : "New animal!"}</button></div>
            <div className="imageCardContainer">
                <img className="imageCard" src={animalImage.imageSource} />
            </div>
            {imageHistory?.length ? <hr /> : <></>}
            {renderHistoryImages()}
        </div>
    );
};
