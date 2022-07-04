import React, { Component } from "react"
import { Grid } from "@mui/material"
import Slider from "react-slick"
import Image from "next/image"

const Slides = () =>{

    const settings = {
      autoplay:true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    return (
      <div className="flex justify-center py-10">
				<Slider className="w-[50%]" {...settings}>
					
					<div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Earthquake</h2>
					</div>
					<div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Flood</h2>
					</div>
					<div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Storm</h2>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Storm</h2>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Storm</h2>
					</div>
          <div className="text-center px-10">
						<Image className="rounded-md" src="/floodLanding.jpg" height={250} width={450}/>
            <h2>Storm</h2>
					</div>
				
				</Slider>	
      </div>
    );
  }

  export default Slides