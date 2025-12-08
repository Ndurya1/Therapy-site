import React from "react";
const DynamicBackground = ({imageURL}) => {
    return(
        <div className="w-full h-screen bg-cover bg-center bg-norepeat flex justify-center items-center" style={{backgroundImage:`url(${imageURL})`}}></div>
    )
}
export default DynamicBackground;