import React from 'react';

import { Card } from '../components';

export const Home:React.FC = () => {
    return (
        <div>
            <h2>Home</h2>
            <Card
                imageSource='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
                imageAltText='Dog from the internet'
                imageSide='left'
                headerText='This is a Dog'
                cardBody={
                    <div>
                        <ul>
                            <li>Dog are cute</li>
                            <li>Dog are soft</li>
                            <li>Pet the dog</li>
                        </ul>
                    </div>
                }
            />
        </div>
    );
};
