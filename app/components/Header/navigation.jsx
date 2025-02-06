"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './mega-menu';
import MobileNavigationDrawer from './mobile-navigation-drawer';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaPinterest } from 'react-icons/fa6';
import ReactCountryFlag from 'react-country-flag';
import { FaPhone } from "react-icons/fa6";
import styles from './page.module.css';
import navigationStyles from './navigation.module.css';


const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const drawerButtonRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowPhoneDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowPhoneDropdown(false);
    }, 500);
  };

  // Add scroll event listener to set isSticky when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isSticky ? `${navigationStyles.stickyNavbar}` : ''}>
      <header className={styles.nav__header}>
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <Link href={'/'} className={styles.logo__link} onClick={() => window.scrollTo(0, 0)}>
              <img src="/logo.webp" height={80} width={200} alt="Tech Cloud ERP Logo" />
            </Link>
            <div className={styles.hiddenOnMobile} >
              <MegaMenu />
            </div>
            {/* Phone Dropdown */}
            <div
              className={navigationStyles.phoneDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            </div>
            <div className={navigationStyles.hiddenOnDesktop}>
          <button
            ref={drawerButtonRef}
            className={styles.menuButton} // Optional: Use a class for styling
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            <AlignJustify />
          </button>
        </div>
            <div className={styles.hiddenOnDesktop}>
              <MobileNavigationDrawer
                {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
              />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
