import React from 'react'

const Copyright = () => {

    const copyright = String.fromCodePoint(0x00A9);
    const year = '2024';
    const companyName = 'Judith Kraziewicz';

    return (
        <span>
            {`${copyright} ${year} ${companyName}`}
        </span>
    );
};

export default Copyright