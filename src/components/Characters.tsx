import React from "react";
import Slider from "react-slick";



export  function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,

    };
}

const Characters:  React.FC = () =>{
    
    return (
        <>
            <Slider {...settings}></Slider>
            {/* <div className="h-[50vh] w-[45vh] mt-0 ml-3 rounded-xl bg-slate-200">
                
            </div>

            <div>
                
            </div> */}
        </> 
    ) 


}


export default Characters