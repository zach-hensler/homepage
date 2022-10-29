import React, { useEffect, useState } from "react";
import { Card, CardRow } from "../components";

import { animalTypes } from "../helperFunctions";

export const ShowMe = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [animalType, setAnimalType] = useState<{name?: string, fetch?: () => Promise<string|void>}>({});
    const [animalImage, setAnimalImage] = useState<string>("");
    const [imageHistory, setImageHistory] = useState<string[]>([]);

    const getRandomThingType = () => {
        setAnimalType(animalTypes[Math.floor(Math.random() * animalTypes.length)]);
    };

    const pushImageToHistory = (image: string) => {
        setImageHistory(prevHistory => [image, ...prevHistory].slice(0,4));        
    };

    useEffect(() => {
        if (!animalType?.fetch) return;

        setLoading(true);
        animalType.fetch()
            .then(image => {
                if (!image) { return; }
                setAnimalImage(image);
                pushImageToHistory(image);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [animalType]);

    const renderHistoryImages = () => {
        return (
            <CardRow
                Cards={
                    imageHistory.map((imageSource, idx) => (
                        <Card
                            cardBody={<img src={imageSource} style={{ maxWidth: "100%" }} />}
                            onClick={() => setAnimalImage(imageSource)}
                            key={`image-${idx}`}
                        />
                    ))
                }
            />
        );
    };

    return (
        <div>
            <h2>Show me a ... {animalType?.name}</h2>
            <div><button disabled={loading} onClick={getRandomThingType}>{loading ? "Loading..." : "New animal!"}</button></div>
            <div style={{ height: "350px", paddingTop: "20px", paddingBottom: "20px" }}><img style={{ maxWidth: "300px", maxHeight: "300px" }} src={animalImage} /></div>
            {imageHistory?.length ? <hr /> : <></>}
            {renderHistoryImages()}
        </div>
    );
};
