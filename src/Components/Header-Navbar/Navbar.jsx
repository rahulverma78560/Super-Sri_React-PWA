/* eslint-disable jsx-a11y/no-distracting-elements */
import { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsHandbagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav(true);
  };

  const items = {
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.social}>
          <div className={styles.social__links}>
            <AiOutlineFacebook className={styles.nav__icons} />
            <BsWhatsapp className={styles.nav__icons} />
            <BsInstagram className={styles.nav__icons} />
            <GrTwitter className={styles.nav__icons} />
          </div>
          <div className="mobile__app">
            <p>Download Our App & get 20% OFF**</p>
          </div>
        </div>
        <nav className={styles.navbar}>
          <div className={styles.mobile__navigation__icons}>
            {!showMobileNav && (
              <GiHamburgerMenu
                onClick={handleShowMobileNav}
                className={styles.nav__icon__hamburger}
              />
            )}
            {showMobileNav && (
              <GiTireIronCross
                onClick={() => setShowMobileNav(false)}
                className={styles.nav__icon__hamburger}
              />
            )}
          </div>
          <div className={styles.brand__logo}>
            <NavLink to={"/"}>
              <img src="/assets/Images/brand logo-1.png" alt="" />
            </NavLink>
          </div>
          <div className={styles.nav__list}>
            <ul>
              <li className={styles.desktop__nav}>About Us</li>
              <li className={styles.desktop__nav}>Contact</li>
              <li className={styles.desktop__nav}>Blog</li>
              <li className={styles.desktop__nav}>Shop</li>
            </ul>
          </div>

          <div className={styles.nav__icons}>
            <BsSearch className={styles.nav__icon} />
            <NavLink
              to={!localStorage.getItem("token") ? "/login" : "/profile"}
            >
              <VscAccount className={styles.nav__icon} />
            </NavLink>
            <NavLink to={"/cart"}>
              <BsHandbagFill className={styles.nav__icon} />
            </NavLink>
            <NavLink to={"/wishlist"}>
              <AiOutlineHeart className={styles.nav__icon} />
            </NavLink>
          </div>
        </nav>
        <div className={styles.category}>
          <div className={styles.category__list}>
            <marquee behavior="scroll" direction="left" loop="-1">
              <ul>
                <li>WORLDWIDE SHIPPING</li>
                <li>100+ YEARS DURABILITY</li>
                <li>FREE SHIPPING ALL OVER INDIA</li>
              </ul>
            </marquee>
          </div>
        </div>
        {showMobileNav && (
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            variants={items}
            className={styles.mobile__navigation}
          >
            <div className={styles.mobile__nav__list}>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Shop</li>
              </ul>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;
