import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill></Image>
      </div>
    </div>
  );
};

export default AboutPage;
