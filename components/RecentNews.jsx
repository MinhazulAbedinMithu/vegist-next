import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const RecentNews = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto">
				<h2>Recent News</h2>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					slidesPerView={3}
					speed={500}
					loop={true}
					touchRatio={1.5}
					navigation={true}
					effect={"flip"}
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default RecentNews;
