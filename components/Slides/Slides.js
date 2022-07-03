import React, { Component } from "react"
import { Grid } from "@mui/material"
import Slider from "react-slick"
import Image from "next/image"

const Slides = () =>{

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className="flex justify-center">
				<Slider className="w-[50%]" {...settings}>
					
					<div className="text-center">
						<Image src="/shop.png" height={250} width={250}/>
					</div>
					<div className="text-center">
						<Image src="/shop.png" height={250} width={250}/>
					</div>
					<div className="text-center">
						<Image src="/shop.png" height={250} width={250}/>
					</div>
				
				</Slider>	
      </div>
    );
  }

  export default Slides