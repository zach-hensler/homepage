import React from "react";

import { Card, CardRow, ImageCard } from "../components";
import { useNavigation } from "../hooks";

export const Home:React.FC = () => {
    const { updateCurrentRoute } = useNavigation();

    return (
        <div>
            <h2>Home</h2>
            <ImageCard
                imageSource={`${process.env.PUBLIC_URL}/img/Ivy_and_Zeus.jpg`}
                imageAltText="My Cats: Ivy and Zeus"
                imageSide="left"
                headerText="Zach Hensler"
                cardBody={
                    <div>
                        <p>
                            I have experience developing responsive React applications, that have to handle complex data/states.
                            I worked on these applications with and without redux, teaching me the pros and cons of using it.
                            I also have two adorable cats (Ivy and Zeus)!
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
                                    <li>Purdue Graduate</li>
                                    <li>Computer Engineering Major</li>
                                    <li>React/Typescript Fan</li>
                                    <li>Casual Cook</li>
                                    <li>Enjoyer of Games</li>
                                </ul>
                            </div>
                        }
                        buttonText="Learn More"
                        onClick={() => updateCurrentRoute("About")}
                    />,
                    <Card
                        key="tech-experience-card"
                        cardHeader="Technology Experience"
                        cardBody={
                            <div>
                                <p>React</p>
                                <p>Typescript</p>
                                <p>JS ES6</p>
                            </div>
                        }
                        buttonText="Learn More"
                        onClick={() => updateCurrentRoute("Technology")}
                    />,
                ]}
            />
        </div>
    );
};
