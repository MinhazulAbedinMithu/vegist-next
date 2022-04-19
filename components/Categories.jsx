import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import CatOne from "../public/images/categoryOne.webp";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useRef } from "react";

const Categories = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="w-full">
			<div className="container mx-auto relative py-16 mt-10">
				<div className="flex">
					<h2 className="absolute text-4xl tracking-wide top-0 left-0 z-10">
						Shop By Category
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
					slidesPerView={6}
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
						<CategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<CategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<CategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<CategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<CategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<CategoryItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
const CategoryItem = () => {
	return (
		<div className="my-5 hover:shadow-xl cursor-pointer">
			<div className="max-w-[120px] mx-auto">
				<Image
					src={CatOne}
					alt="Category"
					layout="responsive"
					objectFit="contain"
				/>
			</div>
			<div className="flex items-center justify-center flex-col py-3">
				<h4 className="text-xl text-gray-700 leading-relaxed">
					Fresh Vegetables
				</h4>
				<p className="text-yellow-500 text-lg">22 items</p>
			</div>
		</div>
	);
};
export default Categories;
