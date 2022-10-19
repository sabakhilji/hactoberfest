import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel>
				<div>
					<Image 
					src="/decor1.jpg"
					alt="image1"
					layout="fill"/>
					<p className="legend">Image 1</p>

				</div>
				<div>
					<img src="/decor2.webp" alt="image2" />
					<p className="legend">Image 2</p>

				</div>
				<div>
					<img src="/painting1.webp" alt="image3"/>
					<p className="legend">Image 3</p>

				</div>
				<div>
					<img src="/sticker1.png" alt="image4"/>
					<p className="legend">Image 4</p>

				</div>
				<div>
					<img src="/sticker2.png" alt="image5"/>
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
        </div>

        
      
        );
    }
};
