import { FunctionalComponent } from "preact";

import IvyAndZeus from "../assets/Ivy_and_Zeus.jpg";
import { Card, CardRow, ImageCard } from "../components";
import { useNavigation } from "../hooks";
import {contactInfo} from "../constants/contactInfo";
import {safeWindow} from "../utils.ts";

export const Home: FunctionalComponent = () => {
    const { updateCurrentRoute } = useNavigation();

    return (
        <div>
            <h2>Home</h2>
            <ImageCard
                imageSource={IvyAndZeus}
                imageAltText="My Cats: Ivy and Zeus"
                imageSide="left"
                headerText="Who Am I?"
                cardBody={
                    <div>
                        <p>
                            I am Zach Hensler, a fullstack web developer/software engineer. I have experience building responsive
                            Front End applications using React and Typescript.  As well as updating RESTful APIs using C# and F#.
                        </p>
                        <p>If you have any questions that I don&apos;t cover here, feel free to:
                            <ul>
                                <li>check out my <a href="#" onClick={() => safeWindow?.open?.(contactInfo.resume, "_blank")}>resume</a></li>
                                <li>reach out via email <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                                <li>find me on LinkedIn at <a
                                    href={contactInfo.linkedInUrl}>{contactInfo.linkedInUser}</a></li>
                            </ul>
                        </p>
                    </div>
                }
            />
            <hr style={{ margin: "40px 0px" }} />
            <CardRow
                Cards={[
                    <Card
                        key="tech-experience-card"
                        cardHeader="Technical Experience"
                        cardBody={
                            <ul>
                                <li>C#</li>
                                <li>F#</li>
                                <li>React</li>
                                <li>Typescript</li>
                                <li>HTML/CSS</li>
                                <li>GIT</li>
                                <li>AWS</li>
                                <li>Python</li>
                            </ul>
                        }
                        buttonText="Learn more"
                        onClick={() => updateCurrentRoute("Technical")}
                    />,
                    <Card
                        key="about-me-home-card"
                        cardHeader="About Me"
                        cardBody={
                            <div style={{ textAlign: "left" }}>
                                <p>I am a:</p>
                                <ul>
                                    <li>Fullstack developer</li>
                                    <li>Computer Engineering Graduate from Purdue University</li>
                                    <li>Art hobbyist</li>
                                    <li>Home cook</li>
                                </ul>
                            </div>
                        }
                        buttonText="Learn more"
                        onClick={() => updateCurrentRoute("About")}
                    />,
                ]}
            />
        </div>
    );
};
