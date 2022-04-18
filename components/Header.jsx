import Image from "next/image";
import { IoIosArrowDown, IoIosSearch, IoIosHeartEmpty } from "react-icons/io";

import { BsHandbag } from "react-icons/bs";

import Logo from "../public/images/logo.webp";
import Link from "next/link";

const Header = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto">
				{/*notification-area start */}
				<div className="flex items-center justify-between font-light border-b py-3">
					<div className="text-md flex items-center justify-center gap-3">
						<span className="text-yellow-500 animate-pulse font-normal">
							Free Shipping
						</span>
						<span>Orders From All Item</span>
					</div>
					<div className="flex items-center justify-center gap-2">
						<span>Account</span>
						<IoIosArrowDown className="text-yellow-500 text-xl" />
					</div>
				</div>
				{/*notification-area end */}
				{/*navbar section start */}
				<header className="flex items-center justify-between py-5 sticky">
					<div>
						<Link href="/">
							<a>
								<Image src={Logo} alt="Vegist" />
							</a>
						</Link>
					</div>
					<nav className="flex items-center justify-center gap-8 text-xl">
						<div>
							<Link href="/">
								<a>HOME</a>
							</Link>
						</div>
						<div>
							<Link href="/shop">
								<a>SHOP</a>
							</Link>
						</div>
						<div>
							<Link href="/collection">
								<a>COLLECTION</a>
							</Link>
						</div>
						<div>
							<Link href="/about">
								<a>ABOUT</a>
							</Link>
						</div>
					</nav>
					<div className="flex items-center justify-center gap-8 text-2xl">
						<div>
							<IoIosSearch />
						</div>
						<div>
							<IoIosHeartEmpty />
						</div>
						<div>
							<BsHandbag />
						</div>
					</div>
				</header>
				{/*navbar section end */}
			</div>
		</div>
	);
};

export default Header;
