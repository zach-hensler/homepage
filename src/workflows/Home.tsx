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
                                    <li>React and Typescript Developer</li>
                                    <li>Computer Engineering Graduate from Purdue</li>
                                </ul>
                                <p>I like:</p>
                                <ul>
                                    <li>Cooking</li>
                                    <li>Video/Card/Board Games</li>
                                    <li>Drawing (Casually)</li>
                                </ul>
                            </div>
                        }
                        buttonText="About"
                        onClick={() => updateCurrentRoute("About")}
                    />,
                    <Card
                        key="tech-experience-card"
                        cardHeader="Tech Experience"
                        cardBody={
                            <ul>
                                <li><b>React</b> - I have been using React professionally since October 2020</li>
                                <li><b>Typescript</b> - I have been using this professionally since June 2021</li>
                                <li><b>Github</b> - I use Github on all my projects, both professional and personal.
                                    And I engaged with it on a daily basis</li>
                                <li><b>AWS Serverless</b> - I am familiar with serverless architecture under AWS,
                                    although it isn&apos;t something that I use daily</li>
                            </ul>
                        }
                        buttonText="Experience"
                        onClick={() => updateCurrentRoute("Technology")}
                    />,
                ]}
            />
        </div>
    );
};
