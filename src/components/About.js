import React from "react";

export default function About ({image, aboutText}){
    const defaultImage = 'https://via.placeholder.com/215'
    return (
        
        <aside>
            <img src = {defaultImage}  alt="Blog Logo" />
            <p>{aboutText}</p>
        </aside>
        
    )
}
