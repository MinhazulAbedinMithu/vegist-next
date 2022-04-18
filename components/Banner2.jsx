import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

// import SliderOne from "../public/images/banner-1.jpg";
// import SliderTwo from "../public/images/banner-2.webp";
// import SliderThree from "../public/images/banner-3.webp";

const Banner = () => {
	return (
		<Carousel autoPlay={true} infiniteLoop={true} showArrows={true}>
			<div
				className={`w-full h-[65vh] bg-[url('../public/images/banner-1.jpg')]`}
			>
				<div className="container mx-auto text-left h-full flex flex-col justify-center items-start gap-3">
					<h2 className="text-7xl font-bold">Farmfood</h2>
					<h2 className="text-7xl font-bold">Freshbox</h2>
					<h4 className="text-4xl tracking-widest">Fresh & Healthy</h4>
					<Link href="/shop">
						<a className="text-xl text-orange-400 font-bold bg-gradient-to-br from-green-800 via-rose-900 to-teal-800 px-4 py-2 rounded-lg">
							Shop Now
						</a>
					</Link>
				</div>
			</div>
			<div
				className={`w-full h-[65vh] bg-[url('../public/images/banner-2.webp')]`}
			>
				<div className="container mx-auto text-left h-full flex flex-col justify-center items-start gap-3">
					<h2 className="text-7xl font-bold">Farmfood</h2>
					<h2 className="text-7xl font-bold">Freshbox</h2>
					<h4 className="text-4xl tracking-widest">Fresh & Healthy</h4>
					<Link href="/shop">
						<a className="text-xl text-orange-400 font-bold bg-gradient-to-br from-green-800 via-rose-900 to-teal-800 px-4 py-2 rounded-lg">
							Shop Now
						</a>
					</Link>
				</div>
			</div>
			<div
				className={`w-full h-[65vh] bg-[url('../public/images/banner-3.webp')]`}
			>
				<div className="container mx-auto text-left h-full flex flex-col justify-center items-start gap-3">
					<h2 className="text-7xl font-bold">Farmfood</h2>
					<h2 className="text-7xl font-bold">Freshbox</h2>
					<h4 className="text-4xl tracking-widest">Fresh & Healthy</h4>
					<Link href="/shop">
						<a className="text-xl text-orange-400 font-bold bg-gradient-to-br from-green-800 via-rose-900 to-teal-800 px-4 py-2 rounded-lg">
							Shop Now
						</a>
					</Link>
				</div>
			</div>
		</Carousel>
	);
};

export default Banner;
