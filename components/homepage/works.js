import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import Image from "next/image";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <Image
                height={30}
                width={30}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png?20210729021049"
                }
                alt="Microsoft "
                className="work-image"
              />
              <div className="work-title">Microsoft</div>
              <div className="work-subtitle">Azure PaaS Engineer</div>
              <div className="work-duration">Dec 2023 - Present</div>
            </div>
            <div className="work">
              <Image
                height={30}
                width={30}
                src={
                  "https://www.estarta.com/wp-content/uploads/2023/04/es-logo.svg"
                  // "https://media.licdn.com/dms/image/C4E0BAQFWo0xvwEDQpQ/company-logo_100_100/0/1641214263841?e=1694649600&v=beta&t=lajOAfTxDyqPu_GfC7hCj1-AUQ3PZjSB6kjzvOEz2lU"
                }
                alt="Estarta Solutions"
                className="work-image"
              />
              {/* <img
                src="https://media.licdn.com/dms/image/C4E0BAQFWo0xvwEDQpQ/company-logo_100_100/0/1641214263841?e=1694649600&v=beta&t=lajOAfTxDyqPu_GfC7hCj1-AUQ3PZjSB6kjzvOEz2lU"
                alt="IDECO"
                className="work-image"
              /> */}
              <div className="work-title">Estarta Solutions</div>
              <div className="work-subtitle">Software Engineer</div>
              <div className="work-duration">Aug 2022 - Present</div>
            </div>
            <div className="work">
              <Image
                height={30}
                width={30}
                src={
                  "https://orange.jo/themes/custom/orange/logo.svg"
                  // "https://media.licdn.com/dms/image/C560BAQF14Fv7ggOx-Q/company-logo_100_100/0/1519911921408?e=1694649600&v=beta&t=im0vesNbFwpG0tB7u5KFJ-KrZYRR1EH5g5B5CM0N7mQ"
                }
                alt="Orange Jordan"
                className="work-image"
              />
              {/* <img
                src="https://media.licdn.com/dms/image/C560BAQF14Fv7ggOx-Q/company-logo_100_100/0/1519911921408?e=1694649600&v=beta&t=im0vesNbFwpG0tB7u5KFJ-KrZYRR1EH5g5B5CM0N7mQ"
                alt="IDECO"
                className="work-image"
              /> */}
              <div className="work-title">Orange Jordan</div>
              <div className="work-subtitle">
                Full-Stack Web Developer
              </div>
              <div className="work-duration">Feb 2022 - Sep 2022</div>
            </div>
            <div className="work">
              <Image
                height={30}
                width={30}
                src={"https://www.ideco.com.jo/portal/Images/Header_Logo.png"}
                alt="IDECO"
                className="work-image"
              />
              {/* <img
                src="https://www.ideco.com.jo/portal/Images/Header_Logo.png"
                alt="IDECO"
                className="work-image"
              /> */}
              <div className="work-title">
                Irbid District Electricity Co. Ltd. (IDECO)
              </div>
              <div className="work-subtitle">Electrical Power Engineer</div>
              <div className="work-duration">Sep 2017 - Sep 2018</div>
            </div>

            <div className="work">
              <Image
                height={30}
                width={30}
                src={
                  "https://www.jpmc.com.jo/ebv4.0/root_storage/en/eb_homepage/en-en.png"
                  // "https://media.licdn.com/dms/image/C4D0BAQFUGJ1DNuneaw/company-logo_100_100/0/1519952494022?e=1694649600&v=beta&t=GZ806FPYkqIfzGZbQWzFHgpcDs76ojYwlYSyT9ULUKg"
                }
                alt="Jordan Phosphate Mines Co.PLC"
                className="work-image"
              />
              {/* <img
                src="https://media.licdn.com/dms/image/C4D0BAQFUGJ1DNuneaw/company-logo_100_100/0/1519952494022?e=1694649600&v=beta&t=GZ806FPYkqIfzGZbQWzFHgpcDs76ojYwlYSyT9ULUKg"
                alt="Jordan Phosphate Mines Co.PLC"
                className="work-image"
              /> */}
              <div className="work-title">Jordan Phosphate Mines Co.PLC</div>
              <div className="work-subtitle">Electrical Power Engineer</div>
              <div className="work-duration">Feb 2016 - Aug 2016</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
