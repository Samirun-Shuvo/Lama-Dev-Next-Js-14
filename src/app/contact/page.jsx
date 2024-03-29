import styles from "./contact.module.css";
import Image from "next/image";


export const metadata = {
  title: "Contact page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" name="" id="" placeholder="Name and Surname" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number (Optional)"
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
