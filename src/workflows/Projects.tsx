import {FunctionalComponent} from "preact";

import OpenNewIcon from "../assets/open_new_icon.png";
import CodeIcon from "../assets/code_icon.png";
import {contactInfo} from "../constants/contactInfo";
import {Card, CardRow, IconLink, IconLinkWrapper} from "../components";

export const Projects: FunctionalComponent = () => {
    const ProjectCard = (name: string, description: string, hostedUrl: string, sourceUrl: string, usePrimaryColor?: boolean) => (
        <Card
            cardHeader={name}
            cardBody={<>
                <div>{description}</div>
                <br />
                <IconLinkWrapper>
                    <IconLink
                        usePrimaryColor={usePrimaryColor}
                        iconSource={OpenNewIcon}
                        iconAltText="Icon"
                        linkText="Website"
                        linkUrl={hostedUrl}
                    />
                    <IconLink
                        usePrimaryColor={usePrimaryColor}
                        iconSource={CodeIcon}
                        iconAltText="Icon"
                        linkText="Source Code"
                        linkUrl={sourceUrl}
                    />
                </IconLinkWrapper>
            </>}
        />
    );
    return (
        <div>
            <h2>Projects</h2>
            <CardRow Cards={[
                ProjectCard(
                    "Homepage",
                    "A web app for telling people about me! (This is where you are now).",
                    contactInfo.homepageUrl,
                    contactInfo.homepageSourcecode
                ),
                ProjectCard(
                    "Gallery",
                    "An art gallery web app.  All pieces uploaded were made by me! Features sorting by created date, " +
                    "and filtering by medium and/or subject.",
                    contactInfo.galleryUrl,
                    contactInfo.gallerySource
                ),
                ProjectCard(
                    "Dice Simulator",
                    "A web app for simulating rolling dice of different quantities and side counts. " +
                        "It additionally allows you to apply modifiers to the rolling, and view a histogram of the results.",
                    contactInfo.diceSimUrl,
                    contactInfo.diceSimSource,
                    true
                ),
            ]} />
        </div>
    );
};
