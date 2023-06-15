import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import INFO from "../data/user";
import Link from "next/link";

const Notfound = ({ INFO }) => {
  useEffect(() => {
    document.title = `404 | ${INFO.main.title}`;
  }, []);

  return (
    <>
      <div className="not-found page-content">
        <div className="notfound-container">
          <div className="notfound-message">
            <div className="notfound-title">
              Oops! <FontAwesomeIcon icon={faFaceSadTear} />
            </div>
            <div className="not-found-message">
              We can't seem to find the page you're looking for.
              <br />
              The requested URL was not found on this server.
            </div>
            <Link href="/" className="not-found-link">
              Go back to the home page
            </Link>
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
    },
  };
}
export default Notfound;
