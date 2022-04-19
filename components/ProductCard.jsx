import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { RiStarLine, RiStarHalfLine, RiStarFill } from "react-icons/ri";

import PdOrangeOne from "../public/images/PdOrange-1.webp";
import PdOrangeTwo from "../public/images/PdOrange-2.webp";

const ProductCard = () => {
	const [hover, setHover] = useState(false);
	return (
		<div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
			<Image
				src={hover ? PdOrangeTwo : PdOrangeOne}
				alt="Product"
				className="hover:contents"
			/>
			<div className="flex flex-col items-center py-3">
				<h4 className="text-xl">Fresh Orange</h4>
				<div className="flex items-center justify-between gap-5">
					<ReactStars
						count={5}
						value={4.5}
						isHalf={true}
						emptyIcon={<RiStarLine />}
						halfIcon={<RiStarHalfLine />}
						fullIcon={<RiStarFill />}
						activeColor="#ffd700"
						edit={false}
						size={22}
					/>
					<p className="text-gray-600 text-md">58 reviews</p>
				</div>
				<p className="font-bold text-lg pt-2">$35.00</p>
			</div>
		</div>
	);
};

export default ProductCard;
