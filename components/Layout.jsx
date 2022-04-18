import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
