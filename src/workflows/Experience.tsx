import React from "react";

import { ImageCard } from "../components";

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
                        All of my professional (and some of my personal) UI development experience has been in React.
                        I am familiar with it&apos;s patterns, features, and common pitfalls.  It is useful for creating
                        re-usable components (like this image card), and also helps with state management (either through
                        redux, localized state hooks, or contexts).
                    </p>
                }
            />
            <ImageCard
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                imageAltText="Typescript Logo"
                imageSide="right"
                headerText="Typescript"
                cardBody={
                    <p>
                        After I tried Typescript back in June 2021, I couldn&apos;t go back.  While it takes a little
                        extra typing every time you add a new feature, it clears up so much confusion down the road.
                        Making the initial time investment worthwhile.
                    </p>
                }
            />
            <ImageCard
                imageSource="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                imageAltText="Github Logo"
                imageSide="left"
                headerText="Github"
                cardBody={
                    <p>
                        Whether it&apos;s at work or for my personal projects, I use Github almost every day.  Version
                        control makes working with a team possible, and it makes tracking down bugs easier by looking at
                        the history.
                    </p>
                }
            />
            <ImageCard
                addImageBackground
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                imageAltText="AWS Logo"
                imageSide="right"
                headerText="AWS Serverless"
                cardBody={
                    <p>
                        I have experience working with <b>Lambda</b>, <b>S3</b>, and <b>DynamoDB</b> professionally.
                        While I don&apos;t use it on my day to day life, I am familiar with the services, how they work,
                        and how a serverless architecture fits together.  I have also dabbled in using <b>Quicksight</b>,
                        <b> DataBrew</b>, and <b>S3</b> to build reporting features.
                    </p>
                }
            />
        </div>
    );
};
