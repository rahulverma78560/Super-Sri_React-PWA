/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-distracting-elements */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [header, setHeader] = useState(false);


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

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {

      setHeader(true);
    }
    else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <header className={styles.header}>
        {/* <div className={styles.social}>
          <div className={styles.social__links}></div>
          <div className={styles.mobile__app}>
            <p>Download Our App & get 20% OFF**</p>
          </div>
        </div> */}
        <nav className={styles.navbar}>
          <div className={styles.mobile__navigation__icons}>
            {!showMobileNav && (
              <>
                <GiHamburgerMenu
                  onClick={handleShowMobileNav}
                  className={styles.nav__icon__hamburger}
                />

              </>

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

          <div className={styles.nav_list}>
            <form class="nosubmit">

              <input className={styles.nosubmit} type="search" placeholder="Search..." />
            </form>
          </div>

          <div className={styles.mobile_con}>
                 <FaWhatsapp className={styles.nav__icon} />
          </div>


          <div className={styles.nav__icons}>
            <NavLink to={"/profile"}>
              <h3 >  Login/Signup</h3>
            </NavLink>
            <NavLink to={"/wishlist"}>
              <CgHeart className={styles.nav__icon} />
            </NavLink>
            <NavLink to={"/cart"}>
              <BsCart3 className={styles.nav__icon} />
            </NavLink>
            <NavLink to={"/cart"}>
              <BsTelephone className={styles.nav__icon} />
            </NavLink>
          </div>
        </nav>
        {/* <div className={styles.category}>
          <div className={styles.category__list}>
            <marquee behavior="scroll" direction="left" loop="-1">
              <ul>
                <li>WORLDWIDE SHIPPING</li>
                <li>100+ YEARS DURABILITY</li>
                <li>FREE SHIPPING ALL OVER INDIA</li>
              </ul>
            </marquee>
          </div>
        </div> */}
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
                <NavLink to={"/"}>
                  <li> Home </li>
                </NavLink>
                <NavLink to={"/products"}>
                  <li>All Sculptures</li>
                </NavLink>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;
