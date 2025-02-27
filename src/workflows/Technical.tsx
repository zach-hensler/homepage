import { ImageCard } from "../components";
import {contactInfo} from "../constants/contactInfo";
import dotnet_logo from "../assets/dotnet_logo.png";

export const Technical = () => {
    return (
        <div>
            <h2>Experience</h2>
            <ImageCard
                maxImageWidth={150}
                imageSource={dotnet_logo}
                imageAltText="Dotnet Logo"
                imageSide="left"
                headerText="C# / F#"
                cardBody={
                    <p>
                        I have been using both C# and F# to update existing RESTful APIs, and to create plugins for handling
                        business logic.
                    </p>
                }
            />
            <ImageCard
                maxImageWidth={150}
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                imageAltText="React Logo"
                imageSide="left"
                headerText="React"
                cardBody={
                    <p>
                        I have been using React professionally since 2020.  Building maintainable, readable, and testable
                        applications with it has been my focus since then.  I am quite familiar with it&apos;s
                        strengths, weaknesses, and quirks.
                    </p>
                }
            />
            <ImageCard
                maxImageWidth={150}
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                imageAltText="Typescript Logo"
                imageSide="left"
                headerText="Typescript"
                cardBody={
                    <p>
                        On the same note of readability, maintainability, and testability; I have been using typescript since
                        June 2021.  I have seen how powerful well written typescript can be, and how deceiving it can be when abused.
                    </p>
                }
            />
            <ImageCard
                maxImageWidth={150}
                imageSource="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                imageAltText="Github Logo"
                imageSide="left"
                headerText="Github"
                cardBody={
                    <>
                        <p>
                            Whether it&apos;s at work or for my personal projects, I use Github almost every day.  While I am
                            by no means a Github Wizard, I am familiar with branching strategies, creating pull requests, handling merge conflicts,
                            and using it to manage multiple environments.
                        </p>
                        <p>You can check out my source code for this website (and my other projects) at my github: <a href={contactInfo.github} rel="noreferrer noopener" target="_blank">{contactInfo.github}</a></p>
                    </>
                }
            />
            <ImageCard
                maxImageWidth={150}
                addImageBackground
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                imageAltText="AWS Logo"
                imageSide="left"
                headerText="AWS Serverless"
                cardBody={
                    <p>
                        I have experience working with <b>Lambda</b>, <b>S3</b>, and <b>DynamoDB</b> professionally.
                        While I don&apos;t use it in my day to day life, I am familiar with the services, how they work,
                        and how serverless architecture fits together.  I have also dabbled in using <b>Quicksight</b>,
                        <b> DataBrew</b>, and <b>S3</b> to build reporting features.
                    </p>
                }
            />
            <ImageCard
                maxImageWidth={150}
                imageSource="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                imageAltText="Python Logo"
                imageSide="left"
                headerText="Python"
                cardBody={
                    <p>
                        I started using Python for my classes in college (2016 - 2020), and have since used it professionally
                        as a part of the backend for one of our web applications.
                    </p>
                }
            />
        </div>
    );
};
