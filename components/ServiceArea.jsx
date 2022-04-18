import { BsCurrencyDollar, BsHeadphones, BsTruck } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ServiceItem = ({ icon, title, desc }) => {
	return (
		<div className="flex items-center justify-center w-1/4 border-2 border-dotted py-4 gap-5 service-item">
			<div className="text-5xl service-icon">{icon}</div>
			<div>
				<h4 className="text-xl text-gray- leading-relaxed">{title}</h4>
				<p className="text-gray-600 text-sm">{desc}</p>
			</div>
		</div>
	);
};
const ServiceArea = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto flex items-center justify-center">
				<ServiceItem
					icon={<BsTruck />}
					title="Free Delivery"
					desc="Orders From All Item"
				/>
				<ServiceItem
					icon={<BsCurrencyDollar />}
					title="Return & Refund"
					desc="Money Back Guarantee"
				/>
				<ServiceItem
					icon={<BsHeadphones />}
					title="Quality Support"
					desc="Alway Online 24/7"
				/>
				<ServiceItem
					icon={<AiOutlineMail />}
					title="Join Newslleter"
					desc="20% Off By Subscribing"
				/>
			</div>
		</div>
	);
};

export default ServiceArea;
