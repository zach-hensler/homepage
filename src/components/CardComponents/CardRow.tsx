import React from 'react';

interface CardRowProps {
    CardOne: JSX.Element
    CardTwo: JSX.Element
}

export const CardRow:React.FC<CardRowProps> = ({
    CardOne,
    CardTwo
}) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '40%', padding: '0% 5%' }}>
                {CardOne}
            </div>
            <div style={{ width: '40%', padding: 'auto 5%' }}>
                {CardTwo}
            </div>
        </div>
    );
};
