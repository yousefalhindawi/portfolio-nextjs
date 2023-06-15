import { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTwitter,
  faGithub,
  faLinkedin,
  faResearchgate,
  // faStackOverflow,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import Head from "next/head";
import Image from "next/image";

const Homepage = ({ INFO, SEO }) => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Head>

      <div className="homepage-container">
        <div className="homepage-first-area">
          <div className="homepage-first-area-left-side">
            <div className="title homepage-title">{INFO.homepage.title}</div>

            <div className="subtitle homepage-subtitle">
              {INFO.homepage.description}
            </div>
          </div>

          <div className="homepage-first-area-right-side">
            <div className="homepage-image-container">
              <div className="homepage-image-wrapper">
                <div
                  style={{
                    width: "370px",
                    height: "370px",
                    position: "relative",
                  }}
                >
                  <Image
                    fill
                    // height= {30}
                    // width= {30}
                    src={"/yousef_alhindawi_pic.jpg"}
                    alt="about"
                    className="homepage-image"
                  />
                </div>
                {/* <img
                  src="yousef_alhindawi_pic.jpg"
                  alt="about"
                  className="homepage-image"
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-socials">
          <a href={INFO.socials.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
          </a>
          <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="homepage-social-icon"
            />
          </a>
          <a href={INFO.socials.ResearchGate} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faResearchgate}
              className="homepage-social-icon"
            />
          </a>
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              className="homepage-social-icon"
            />
          </a>
        </div>

        <div className="homepage-projects">
          <AllProjects />
        </div>

        <div className="homepage-after-title">
          <div className="homepage-articles">
            {myArticles.map((article, index) => (
              <div className="homepage-article" key={(index + 1).toString()}>
                <Article
                  key={(index + 1).toString()}
                  date={article.date}
                  title={article.title}
                  description={article.description}
                  link={"/article/" + (index + 1)}
                />
              </div>
            ))}
          </div>

          <div className="homepage-works">
            <Works />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      INFO,
      SEO,
    },
  };
}
export default Homepage;
