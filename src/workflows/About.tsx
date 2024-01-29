import React from "react";

import {Card, CardRow, IconLink, IconLinkWrapper, ImageCard} from "../components";
import {contactInfo} from "../constants/contactInfo";

export const About:React.FC = () => {
    return (
        <div>
            <h2>About Me</h2>
            <div>
                <CardRow
                    Cards={[
                        <Card
                            cardHeader="Work"
                            cardBody={
                                <>
                                    <p>
                                        I have been working full time as a front end developer since October 2020, using React, Typescript,
                                        Github, and AWS Serverless Services.  I am also somewhat familiar with C#, Python, and C.
                                    </p>
                                    <p>
                                        I am dedicated to continuously learning new skills, and improving my existing ones.
                                    </p>
                                </>
                            }
                            key="about-me-work-experience"
                        />,
                        <Card
                            cardHeader="Purdue"
                            cardBody={
                                <>
                                    <p>
                                        At Purdue, I studied computer engineering.  I was able to get experience with several languages
                                        from my classes, including: C, Python, C++, Java, and Scheme.  This variety
                                        gives me a well rounded approach to problem solving in any language.
                                    </p>
                                    <p>
                                        I was also given the opportunity to work part time with the college of science while studying.
                                        There I worked with professors to build their research pages, and setup a CMS
                                        for them to add their own content.
                                    </p>
                                </>
                            }
                            key="about-me-purdue-experience"
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
                            cardHeader="Hobbies"
                            cardBody={
                                <>
                                    <p>
                                        For fun, I enjoy playing games, cooking, and making art!  If you&apos;re interested in my art, you can check out&nbsp;
                                        <a href={contactInfo.galleryUrl} target="_blank" rel="noreferrer">my gallery website here</a>.
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
                                        Alternatively, you can reach out to me directly via email.
                                    </p>
                                    <IconLinkWrapper>
                                        <IconLink
                                            iconUrl={`${process.env.PUBLIC_URL}/img/github_logo.png`}
                                            iconAltText="Github Icon"
                                            linkText="Github"
                                            linkUrl={contactInfo.github}
                                        />
                                        <IconLink
                                            iconUrl={`${process.env.PUBLIC_URL}/img/linkedin_logo.webp`}
                                            iconAltText="LinkedIn Icon"
                                            linkText="LinkedIn"
                                            linkUrl={contactInfo.linkedInUrl}
                                        />
                                        <IconLink
                                            iconUrl={`${process.env.PUBLIC_URL}/img/pdf_icon.png`}
                                            iconAltText="PDF Icon"
                                            linkText="Resume"
                                            linkUrl=""
                                            onClick={() => window.open(`${process.env.PUBLIC_URL}/Resume_2023_08.pdf`, "_blank")}
                                        />
                                        <IconLink
                                            iconUrl={`${process.env.PUBLIC_URL}/img/gmail_icon.webp`}
                                            iconAltText="Gmail Icon"
                                            linkText="Email Me"
                                            linkUrl={`mailto:${contactInfo.email}`}
                                        />
                                    </IconLinkWrapper>
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
