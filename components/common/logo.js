import Link from "next/link";
import INFO from "../../data/user";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<>
			{link ? <Link href="/">{imageElement}</Link> : imageElement}
		</>
	);
};

export default Logo;
