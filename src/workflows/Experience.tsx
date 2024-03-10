import { ImageCard } from "../components";
import {contactInfo} from "../constants/contactInfo";

export const Experience = () => {
    return (
        <div>
            <h2>Experience</h2>
            <ImageCard
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                imageAltText="React Logo"
                imageSide="left"
                headerText="React"
                cardBody={
                    <p>
                        I have been using React professionally since 2020.  Building maintainable, readable, and testable
                        large scale applications with it has been my focus since then.  I am quite familiar with it&apos;s
                        strengths, weaknesses, and quirks.
                    </p>
                }
            />
            <ImageCard
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
                        <p>You can check out my source code for this website (and my other projects) on <a href={contactInfo.github} rel="noreferrer noopener" target="_blank">my github: {contactInfo.github}</a></p>
                    </>
                }
            />
            <ImageCard
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
                imageSource="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"
                imageAltText="C# Logo"
                imageSide="left"
                headerText="C#"
                cardBody={
                    <p>
                        I first dabbled in C# back in 2021.  And have been using it off an on since then.  But I really started
                        to dig my heels in January 2024.  I&apos;m beginning to feel quite comfortable with the language,
                        and making sure that all of my code is testable with XUnit.
                    </p>
                }
            />
            <ImageCard
                imageSource="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                imageAltText="Python Logo"
                imageSide="left"
                headerText="Python"
                cardBody={
                    <p>
                        I started using Python for my classes in college (2016 - 2020), and have since used it professionally
                        as a part of the backend for our web application.
                    </p>
                }
            />
        </div>
    );
};
