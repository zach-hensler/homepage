import React from "react";

import { ImageCard } from "../components";

export const Technology = () => {
    return (
        <div>
            <h2>Technology Choices for this Project</h2>
            <ImageCard
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                imageAltText="React"
                imageSide="left"
                headerText="React"
                cardBody={
                    <p>
                        While React may be overkill for a simple page like this, I was still able to take
                        advantage of it for this project.  React allows me to create reusable components, just
                        like this card!  Encouraging code reuse and simplifying state management.
                    </p>
                }
            />
            <ImageCard
                imageSource="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                imageAltText="Typescript"
                imageSide="right"
                headerText="Typescript"
                cardBody={
                    <p>
                        After I tried Typescript back in June 2021, I couldn&apos;t go back.  While it takes a little
                        extra typing every time you create a new component, it clears up so much confusion down the road.
                        Making the initial investment worthwhile.
                    </p>
                }
            />
            <ImageCard
                imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"
                imageAltText="Node JS"
                imageSide="left"
                headerText="Node Modules"
                cardBody={
                    <p>
                        I chose to use as FEW node modules as possible for this project, trying to
                        build everything myself instead.  While in a commercial product, that&apos;s not
                        going to always be the best choice.  Time equals money!  But in this case, I
                        wanted the learning experience and to have full creative control over the project.
                    </p>
                }
            />
        </div>
    );
};
