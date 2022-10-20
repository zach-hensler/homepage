import React, { useEffect, useState } from "react";

import { getCatImage, getDogImage, getFoxImage } from "../helperFunctions";

export const ShowMe = () => {
    const listOfThings = [
        {name: "Cat", fetch: getCatImage},
        {name: "Dog", fetch: getDogImage},
        {name: "Fox", fetch: getFoxImage},
    ];

    const [thingType, setThingType] = useState<{name?: string, fetch?: () => Promise<string|void>}>({});
    const [thingImage, setThingImage] = useState<string>("");

    const getRandomThingType = () => {
        setThingType(listOfThings[Math.floor(Math.random() * listOfThings.length)]);
    };

    useEffect(() => {
        if (!thingType?.fetch) { return; }
        thingType.fetch()
            .then(image => {
                if (!image) { return; }
                setThingImage(image);
            })
            .catch(error => console.error(error));
    }, [thingType]);

    return <div>
        <h2>Show me a ... {thingType?.name}</h2>
        <div><button onClick={getRandomThingType}>New thing!</button></div>
        <img style={{ maxWidth: "300px", maxHeight: "300px" }} src={thingImage} />
    </div>;
};
