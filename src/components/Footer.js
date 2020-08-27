import React from "react";

import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import portfolioIcon from "@iconify/icons-bytesize/portfolio";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/patrick-replogle/Conways-Game-of-Life"
        target="blank"
        style={{ margin: "0 3%" }}
      >
        <Icon icon={githubFilled} style={{ fontSize: "45px" }} />
      </a>

      <a
        href="https://patrick-replogle.com/"
        target="blank"
        style={{ margin: "0 3%" }}
      >
        <Icon icon={portfolioIcon} style={{ fontSize: "40px" }} />
      </a>

      <a
        href="https://www.linkedin.com/in/patrick-replogle/"
        target="blank"
        style={{ margin: "0 3%" }}
      >
        <Icon icon={linkedinFilled} style={{ fontSize: "45px" }} />
      </a>
    </div>
  );
};

export default Footer;
