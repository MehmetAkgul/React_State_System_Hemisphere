import React from "react";
import northernPic from './image/northern.png';
import southernPic from './image/southern.jpeg';

const hemisphereConfig = {
    Northern: {
        text: "it is northern hemisphere",
        picture: northernPic,
    },
    Southern: {
        text: "it is southern hemisphere",
        picture: southernPic,
    },
}

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere];
    return (
        <div>
            <img src={picture} alt={text}/>
        </div>
    )
}

export default HemisphereDisplay