import React from "react";
import northernPic from './image/northern.png';
import southernPic from './image/southern.jpeg';

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    const picture = latitude > 0 ? northernPic : southernPic;
    return (
        <div>
            <img src={picture} alt={hemisphere}/>
        </div>
    )
}

export default HemisphereDisplay