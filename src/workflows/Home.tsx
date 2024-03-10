import { FunctionalComponent } from "preact";

import IvyAndZeus from "../assets/Ivy_and_Zeus.jpg";
import { Card, CardRow, ImageCard } from "../components";
import { useNavigation } from "../hooks";
import {contactInfo} from "../constants/contactInfo";

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
                            My name is Zach Hensler, I am a professional web developer/software engineer.  I consider myself
                            to be a seasoned frontend developer, and a budding backend developer.  On this website, I hope to
                            communicate to you: my experience, my hobbies, and a little bit of my personality as well!
                        </p>
                        <p>If you have any questions that I didn&apos;t cover here, feel free to reach out via email&nbsp;
                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                            &nbsp;or on LinkedIn at <a href={contactInfo.linkedInUrl}>{contactInfo.linkedInUser}</a>
                        </p>
                    </div>
                }
            />
            <hr style={{ margin: "40px 0px" }} />
            <CardRow
                Cards={[
                    <Card
                        key="about-me-home-card"
                        cardHeader="About Me"
                        cardBody={
                            <div style={{ textAlign: "left" }}>
                                <p>I am a:</p>
                                <ul>
                                    <li>Seasoned frontend developer, with experience using React, Typescript, and Jest.</li>
                                    <li>Fledgling backend developer, learning C# and Python.</li>
                                    <li>Computer Engineering Graduate from Purdue University.</li>
                                </ul>
                                <p>I like:</p>
                                <ul>
                                    <li>Cooking</li>
                                    <li>Video/Card/Board Games</li>
                                    <li>Drawing/Painting</li>
                                </ul>
                            </div>
                        }
                        buttonText="Learn more about me"
                        onClick={() => updateCurrentRoute("About")}
                    />,
                    <Card
                        key="tech-experience-card"
                        cardHeader="Programming Language/Tooling Experience"
                        cardBody={
                            <ul>
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Github</li>
                                <li>AWS Serverless</li>
                                <li>C#</li>
                                <li>Python</li>
                            </ul>
                        }
                        buttonText="Learn more about my experience"
                        onClick={() => updateCurrentRoute("Experience")}
                    />,
                ]}
            />
        </div>
    );
};
