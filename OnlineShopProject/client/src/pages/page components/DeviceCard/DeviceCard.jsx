import React from 'react';

const DeviceCard = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <h5>{props.description}</h5>
        </div>
    );
};

export default DeviceCard;