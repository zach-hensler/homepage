import Resume from '../assets/resume_2024_08_08.pdf';

const hostedUrl = "https://zach-hensler.github.io/";
const sourceCodeUrl = "https://github.com/zach-hensler/";

export const contactInfo = {
    email: "zhensler12@gmail.com",
    linkedInUser: "zhensler",
    linkedInUrl: "https://www.linkedin.com/in/zhensler/",
    github: sourceCodeUrl,
    diceSimUrl: hostedUrl + "dice_simulator/",
    diceSimSource: sourceCodeUrl + "dice_simulator/",
    galleryUrl: hostedUrl + "gallery/",
    gallerySource: sourceCodeUrl + "gallery/",
    homepageUrl: hostedUrl + "homepage/",
    homepageSourcecode: sourceCodeUrl + "homepage/",
    resume: Resume
} as const;
