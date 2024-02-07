import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SamirunShuvo</div>
      <div className={styles.text}>
        Samirun Shuvo thoughts agency © All rught reserved.
      </div>
    </div>
  );
};

export default Footer;
