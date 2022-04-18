import Image from "next/image";
import Link from "next/link";

const SubBanner = () => {
	return (
		<div className="w-full my-10">
			<div className="container mx-auto flex items-center justify-between gap-10">
				<div className="w-1/3">
					<div
						className={`w-full bg-[url('../public/images/subBannerOne.webp')] bg-no-repeat bg-left-top bg-cover flex items-center justify-end px-5 py-20`}
					>
						<div>
							<span className="text-lg tracking-wider text-gray-600">
								Organic Juice
							</span>
							<h4 className="text-2xl font-bold leading-relaxed">
								Fresh Vegetable
							</h4>
							<h4 className="text-2xl font-bold leading-relaxed pb-3">
								On Our Product
							</h4>
							<Link href="/shop">
								<a className="text-yellow-500 font-bold text-xl">Shop Now</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-1/3">
					<div
						className={`w-full bg-[url('../public/images/subBannerTwo.jpg')] bg-no-repeat bg-left-top bg-cover flex items-center justify-end px-5 py-20`}
					>
						<div>
							<span className="text-lg tracking-wider text-gray-600">
								Organic Juice
							</span>
							<h4 className="text-2xl font-bold leading-relaxed">
								Fresh Vegetable
							</h4>
							<h4 className="text-2xl font-bold leading-relaxed pb-3">
								On Our Product
							</h4>
							<Link href="/shop">
								<a className="text-yellow-500 font-bold text-xl">Shop Now</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-1/3">
					<div
						className={`w-full bg-[url('../public/images/subBannerThree.jpg')] bg-no-repeat bg-left-top bg-cover flex items-center justify-end px-5 py-20`}
					>
						<div>
							<span className="text-lg tracking-wider text-gray-600">
								Organic Juice
							</span>
							<h4 className="text-2xl font-bold leading-relaxed">
								Fresh Vegetable
							</h4>
							<h4 className="text-2xl font-bold leading-relaxed pb-3">
								On Our Product
							</h4>
							<Link href="/shop">
								<a className="text-yellow-500 font-bold text-xl">Shop Now</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubBanner;
