import Link from "next/link";
import INFO from "../../data/user";
import Image from "next/image";

const Logo = (props) => {
  let { width, link } = props;

  if (link === undefined) {
    link = true;
  }

  const imageElement = (
    <div style={{ width: width, height: width, position: "relative" }}>
      <Image fill src={INFO.main.logo} alt="logo" className="logo" />
    </div>
    // <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
  );

  return <>{link ? <Link href="/">{imageElement}</Link> : imageElement}</>;
};

export default Logo;
