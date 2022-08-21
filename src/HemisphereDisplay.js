import React from "react";

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    return (
        <div>
            {hemisphere}
        </div>
    )
}

export default HemisphereDisplay