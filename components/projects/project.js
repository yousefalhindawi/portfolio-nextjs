import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <>
      <div className="project">
        <Link href={link} target="_blank">
          <div className="project-container">
            <div className="project-logo">
              <Image
                // fill
                height={30}
                width={30}
                src={logo}
                alt="logo"
              />
              {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Project;
