import axios from "axios";
import { Buffer } from "buffer";


const jpgegPrefix = "data:image/jpeg;base64,";

const getCatImage = () => {
    return axios.get("https://cataas.com/cat", { responseType: "arraybuffer" })
        .then(response => Buffer.from(response.data, "binary").toString("base64"))
        .then(base64Image => {
            return jpgegPrefix+base64Image;
        })
        .catch((error) => {
            console.error(error);
        });
};

const getDogImage = () => {
    return axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => response.data.message)
        .catch(error => console.error(error));
};

const getFoxImage = () => {
    return axios.get("https://randomfox.ca/floof/")
        .then(response => response.data.image)
        .catch(error => console.error(error));
};

export const animalTypes = [
    {name: "Cat", fetch: getCatImage},
    {name: "Dog", fetch: getDogImage},
    {name: "Fox", fetch: getFoxImage},
];
