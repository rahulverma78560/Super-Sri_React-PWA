import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.grid__container}>
          <div className={styles.grid__item}>
            <h1>Get In Touch</h1>
            <h4>call: +91 6205666646</h4>
            <h4>Timing: 10Am to 7Pm IST</h4>
            <h4>Monday to Saturday</h4>
            <h4>Mail : nikhilranjankumar1999@gmail.com</h4>
            <div className={styles.social__icons}>
              <AiOutlineFacebook className={styles.social__icon} />
              <AiOutlineInstagram className={styles.social__icon} />
              <AiOutlineTwitter className={styles.social__icon} />
              <AiOutlineLinkedin className={styles.social__icon} />
              <AiOutlineYoutube className={styles.social__icon} />
              <AiOutlineGithub className={styles.social__icon} />
              <AiOutlineMail className={styles.social__icon} />
            </div>
          </div>
          <div className={styles.grid__item}>
            <h1>Quick Links</h1>
            <h4>Contact Us</h4>
            <h4>About Us</h4>
            <h4>Your Account</h4>
            <h4>Testomonial</h4>
          </div>
          <div className={styles.grid__item}>
            <h1>Shop</h1>
            <h4>All Sculptures</h4>
            <h4>Custom Sculptures</h4>
            <h4>Master Official Merchandise</h4>
            <h4>Life Size Sculptures</h4>
          </div>
          <div className={styles.grid__item}>
            <h1>Hear It First!</h1>
            <p>Get the latest updates on new products and upcoming sales</p>
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>



      </footer>

      <div className={styles.mobile_footer}>

        <div className={styles.footer_icons}>
            <div className={styles.icons}>
              <IoHomeOutline className={styles.footer_icon} />
              <p>Home</p>
            </div>
            <div className={styles.icons}>
              <MdFavoriteBorder className={styles.footer_icon} />
              <p>Favorite</p>
            </div>
            <div className={styles.icons}>
              <FaRegUser className={styles.footer_icon} />
              <p>My account</p>
            </div>
            <div className={styles.icons}>
              <BsCart3 className={styles.footer_icon} />
              <p>Cart</p>
            </div>

        </div>

      </div>

    </>

  );
};

export default Footer;
