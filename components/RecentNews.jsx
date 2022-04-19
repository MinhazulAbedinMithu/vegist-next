import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import NewsOne from "../public/images/newsOne.webp";
import {
	RiCalendarLine,
	RiMessage2Line,
	RiArrowRightLine,
} from "react-icons/ri";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Link from "next/link";
import { useRef } from "react";

const RecentNews = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="w-full">
			<div className="container mx-auto relative">
				<h2 className="absolute text-3xl tracking-wide top-0 left-0 z-10">
					Recent News
				</h2>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={3}
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
					<SwiperSlide>
						<NewsItem />
					</SwiperSlide>
					<SwiperSlide>
						<NewsItem />
					</SwiperSlide>
					<SwiperSlide>
						<NewsItem />
					</SwiperSlide>
					<SwiperSlide>
						<NewsItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
const NewsItem = () => {
	return (
		<div className="w-full">
			<Image
				src={NewsOne}
				alt="News"
				width="100%"
				height="100%"
				layout="responsive"
				objectFit="contain"
			/>
			<div className="flex items-center justify-between bg-orange-400 text-white px-3 py-1 -mt-[65px]">
				<div className="flex items-center justify-start gap-2">
					<RiCalendarLine className="text-xl" />
					<span className="text-lg">Feb 13, 2021</span>
				</div>
				<div className="flex items-center justify-start gap-2">
					<RiMessage2Line className="text-xl" />
					<span className="text-lg">16 Comment</span>
				</div>
			</div>
			<div className="py-4">
				<h4 className="text-2xl leading-relaxed">
					Health And Skin For Your Organic
				</h4>
				<p className="text-lg text-justify py-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum vel
					dolore, asperiores facere minus rem beatae consequuntur officiis totam
					dolor alias illo dicta possimus...
				</p>
				<div className="flex items-center justify-between">
					<Link href="/">
						<a className="flex items-center justify-center gap-1 text-xl font-bold text-orange-400">
							Read More <RiArrowRightLine />
						</a>
					</Link>
					<p className="text-lg text-gray-700">
						By <b>Anil Viradiya</b>
					</p>
				</div>
			</div>
		</div>
	);
};
export default RecentNews;
