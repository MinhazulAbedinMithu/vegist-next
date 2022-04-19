import {
	Banner,
	Categories,
	DealBanner,
	Layout,
	RecentNews,
	ServiceArea,
	SubBanner,
} from "../components";

export default function Home() {
	return (
		<Layout
			title="Vegist"
			description="Online Store of Vegetables, Meats and Fruits"
		>
			<Banner />
			<SubBanner />
			<ServiceArea />
			<Categories />
			<DealBanner countdownTimeStampDate="04/28/2022 20:15:40" />
			<RecentNews />
		</Layout>
	);
}
