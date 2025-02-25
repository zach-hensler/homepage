import { FunctionalComponent } from "preact";

import GithubLogo from "../assets/github_logo.png";
import LinkedInLogo from "../assets/linkedin_logo.webp";
import PdfIcon from "../assets/pdf_icon.png";
import GmailIcon from "../assets/gmail_icon.webp";
import {Card, CardRow, IconLink, IconLinkWrapper} from "../components";
import {contactInfo} from "../constants/contactInfo";
import {safeWindow} from "../utils.ts";

export const About:FunctionalComponent = () => {
    return (
        <div>
            <h2>About Me</h2>
            <div>
                <CardRow
                    Cards={[
                        <Card
                            cardHeader="Career"
                            cardBody={
                                <>
                                    <p>
                                        I have been working full time as a web developer since October 2020.
                                        Working with React, Typescript, C#, and F# in AWS Serverless and on-premise environments.
                                    </p>
                                    <p>
                                        I am dedicated to continuously learning new skills, and improving my existing ones.
                                    </p>
                                </>
                            }
                            key="about-me-work-experience"
                        />,
                        <Card
                            cardHeader="Education (Purdue University)"
                            cardBody={
                                <>
                                    <ul>
                                        <li>Bachelor's Degree in Computer Engineering</li>
                                        <li>In my classes, I used: C, Python, C++, Java, and Scheme</li>
                                        <li>I worked part time developing websites for the College of Science</li>
                                    </ul>
                                </>
                            }
                            key="about-me-purdue-experience"
                        />,
                    ]}
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
                                            iconSource={GithubLogo}
                                            iconAltText="Github Icon"
                                            linkText="Github"
                                            linkUrl={contactInfo.github}
                                        />
                                        <IconLink
                                            iconSource={LinkedInLogo}
                                            iconAltText="LinkedIn Icon"
                                            linkText="LinkedIn"
                                            linkUrl={contactInfo.linkedInUrl}
                                        />
                                        <IconLink
                                            iconSource={PdfIcon}
                                            iconAltText="PDF Icon"
                                            linkText="Resume"
                                            linkUrl=""
                                            onClick={() => safeWindow?.open?.(contactInfo.resume, "_blank")}
                                        />
                                        <IconLink
                                            iconSource={GmailIcon}
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
