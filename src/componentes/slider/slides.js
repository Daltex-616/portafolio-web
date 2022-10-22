import React from "react";
import "./Slider.css"

const sliderInfo= [
    {
        src:"https://media-exp1.licdn.com/dms/image/C4D22AQGBEjuJC0sZQg/feedshare-shrink_800/0/1664938069610?e=1669248000&v=beta&t=RWilwFvLfCEXcnM2R9oOoWYcgS6o6IGzcW3zuYa8_00",
        alt:"Proyeto 1",
        desc:"API Tareas"
    },
    {
        src:"https://miro.medium.com/max/828/1*WY7ELhXIVxbGlUwmhA1PSw.jpeg",
        alt:"Proyeto 2",
        desc:"GuiHub Personal"
    },
    {
        src:"https://media-exp1.licdn.com/dms/image/C4D22AQGBEjuJC0sZQg/feedshare-shrink_800/0/1664938069610?e=1669248000&v=beta&t=RWilwFvLfCEXcnM2R9oOoWYcgS6o6IGzcW3zuYa8_00",
        alt:"Proyeto 3",
        desc:"Api Personas"
    },
    {
        src:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
        alt:"Proyeto 4",
        desc:"Pagina Web"
    },
    {
        src:"https://www.mytaskpanel.com/wp-content/uploads/2021/05/2021-05-14-1.webp",
        alt:"Proyeto 5",
        desc:"Programas Python"
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

