import React from "react";
import "./Slider.css"

const sliderInfo= [
    {
        src:"https://images7.alphacoders.com/119/1195702.jpg",
        alt:"Proyeto 1",
        desc:"Proyecto 1"
    },
    {
        src:"https://images7.alphacoders.com/119/1195702.jpg",
        alt:"Proyeto 2",
        desc:"Proyecto 2"
    },
    {
        src:"https://images7.alphacoders.com/119/1195702.jpg",
        alt:"Proyeto 3",
        desc:"Proyecto 3"
    },
    {
        src:"https://images7.alphacoders.com/119/1195702.jpg",
        alt:"Proyeto 4",
        desc:"Proyecto 4"
    },
    {
        src:"https://images7.alphacoders.com/119/1195702.jpg",
        alt:"Proyeto 5",
        desc:"Proyecto 5"
    },
    

]

const slides = sliderInfo.map(slide =>(
    <div className="silde-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;

