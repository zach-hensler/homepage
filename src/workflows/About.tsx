import React from "react";

import { Card, CardRow, ImageCard } from "../components";

{/* <ul>
<li>I am a Purdue Graduate</li>
<li>I am a front end develop proficient in React</li>
<li>I am not a fan of css</li>
<li><a href="https://github.com/zach-hensler" rel="noreferrer noopener" target="_blank">
    Checkout my github
</a></li>
<li><a href="https://www.linkedin.com/in/zhensler/" rel="noreferrer noopener" target="_blank">
    My LinkedIn
</a></li>
</ul> */}

export const About:React.FC = () => {
    return (
        <div>
            <h2>About Me</h2>
            <div>
                <CardRow
                    Cards={[
                        <Card
                            cardHeader="Purdue"
                            cardBody={
                                <>
                                    <p>
                                        At Purdue, I studied computer engineering.  I was able to get experience with several languages
                                        for my classes, including: C, C++, Java, Python, and Scheme.  The sheer variety of this experience
                                        gives me a well rounded approach to problem solving in any language.
                                    </p>
                                    <p>
                                        I was also given the opportunity to work part time with the college of science while studying.
                                        There I worked with professors to build their research pages, and setup the CMS for them to maintain
                                        the content moving forward.
                                    </p>
                                </>
                            }
                            key="about-me-purdue-experience"
                        />,
                        <Card
                            cardHeader="Work"
                            cardBody={
                                <>
                                    <p>
                                        I have been working full time as a front end developer since October 2020, using React, Typescript,
                                        and occasionally Redux.
                                    </p>
                                </>
                            }
                            key="about-me-work-experience"
                        />,
                    ]}
                />
                <ImageCard
                    imageSource={process.env.PUBLIC_URL+"/img/Ivy_and_Zeus.jpg"}
                    imageSide="left"
                    imageAltText="Picture of my cats"
                    headerText="Break Time"
                    cardBody={
                        <>
                            <p>
                                Wow!  That was alot of text that you just read.  Take a break!
                                Look at my cats! (Their names are Ivy and Zeus)
                            </p>
                            <p>Go stretch, get some water, and relax!</p>
                        </>
                    }
                />
                <CardRow
                    Cards={[
                        <Card
                            cardHeader="Fun!"
                            cardBody={
                                <>
                                    <p>
                                        For fun, I play alot games.  Videogame wise, I like to play on my switch and PC.
                                        And I also love playing board/card games with friends and family!
                                    </p>
                                    <p>
                                        I also enjoy cooking (although I still have alot to learn), and going to the gym.
                                    </p>
                                </>
                            }
                            key="about-me-for-fun"
                        />,
                        <Card
                            cardHeader="External Links"
                            cardBody={
                                <>
                                    <p>
                                        If you still want to know more about me, you can checkout out my profiles on these platforms!
                                        I&apos;m not super active on social media, but hopefully you can find what you&apos;re looking for.
                                    </p>
                                    <ul style={{ textAlign: "left" }}>
                                        <li><a href="https://github.com/zach-hensler" rel="noreferrer noopener" target="_blank">
                                            Github
                                        </a></li>
                                        <li><a href="https://www.linkedin.com/in/zhensler/" rel="noreferrer noopener" target="_blank">
                                            LinkedIn
                                        </a></li>
                                        <li>Resume</li>
                                    </ul>
                                </>
                            }
                            key="about-me-external-links"
                        />,
                    ]}
                />
            </div>
        </div>
    );
};
