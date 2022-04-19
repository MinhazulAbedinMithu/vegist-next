import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useRef } from "react";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="w-full">
			<div className="container mx-auto relative py-16 mt-10">
				<div className="flex">
					<h2 className="absolute text-3xl tracking-wide top-0 left-0 z-10">
						Featured Products
					</h2>
					<div className="flex items-center">
						<div
							ref={prevRef}
							className="absolute top-0 right-24 text-3xl bg-yellow-500 p-2 rounded-md cursor-pointer z-10 text-white"
						>
							<BiLeftArrow />
						</div>
						<div
							ref={nextRef}
							className="absolute top-0 right-4 text-3xl bg-yellow-500 p-2 rounded-md z-10 text-white"
						>
							<BiRightArrow />
						</div>
					</div>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={4}
					speed={500}
					loop={true}
					touchRatio={1.5}
					// navigation={true}
					effect={"flip"}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default FeaturedProduct;
