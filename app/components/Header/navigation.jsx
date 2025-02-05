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
              {/* <FaPhone size={24} />
              {showPhoneDropdown && (
                <div className={navigationStyles.dropdownContent}>
                  <a className={navigationStyles.dropdownItem} href="tel:+91 8919439603">
                    <ReactCountryFlag countryCode="IN" svg style={{ width: '24px', height: '18px' }} />
                    <span>+91 8919439603</span>
                  </a>
                  <a className={navigationStyles.dropdownItem} href="tel:+13127663390">
                    <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '18px' }} />
                    <span>+1 (312) 766-3390</span>
                  </a>
                </div>
              )} */}
            </div>
            <button
              ref={drawerButtonRef}
              className={styles.menuIcon}
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
            >
              <AlignJustify />
            </button>
            {/* Social Media Icons */}
            {/* <div className={styles.socialMediaIcons}>
              <a href="https://www.instagram.com/techclouderp/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/TechCloudERPSoftwareSolutions" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/13619340/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://in.pinterest.com/techclouderp/" target="_blank" rel="noopener noreferrer">
                <FaPinterest />
              </a>
              <a href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/TechCloudERP" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div> */}
            {/* Mobile navigation drawer */}
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
