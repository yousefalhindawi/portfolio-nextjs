import { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import Head from "next/head";
import Image from "next/image";

const About = ({ INFO, SEO }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <>
      <Head>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Head>

      <div className="about-container">
        <div className="about-main">
          <div className="about-right-side">
            <div className="title about-title">{INFO.about.title}</div>

            <div className="subtitle about-subtitle">
              {INFO.about.description}
            </div>

            <div className="subtitle about-subtitle">
              {INFO.about.footballDesc}
              <ul>
                {INFO.about.footballTrophy.map((Trophy) => (
                  <li>{Trophy}</li>
                ))}
              </ul>
              <div className="image-football-container">
                <div className="about-image-football">
                  <div
                    style={{
                      // width: "370px",
                      height: "370px",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={"/my-success-in-football.png"}
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>
                <div className="about-image-football">
                  <div
                    style={{
                      // width: "370px",
                      height: "370px",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={"/mesport.jpg"}
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-left-side">
            <div className="about-image-container">
              <div className="about-image-wrapper">
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
                    src={"/about.jpg"}
                    alt="about"
                    className="about-image"
                  />
                </div>
                {/* <img src="about.jpg" alt="about" className="about-image" /> */}
              </div>
            </div>

            <div className="about-socials">
              <Socials />
            </div>
          </div>
        </div>
        <div className="about-socials-mobile">
          <Socials />
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
export default About;
