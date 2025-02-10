import Link from 'next/link';
import Container from './container';
import DropdownContent from './dropdown-content';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './page.module.css'

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
  onMenuClick,
}) => {
  const handleClick = () => {
    const activeElement = document.activeElement;
    activeElement.blur();
  };

  const handleItemClick = () => {
    onMenuClick && onMenuClick();
    handleClick();
    setIsDrawerOpen && setIsDrawerOpen(false);
  };

  return (
    // <li>
    //   <div className={styles.nav_item_content}>
    //     <Link
    //       href={href}
    //       className={({ isActive }) => (isActive ? `${styles.active}` : '')}
    //       onClick={(e) => {
    //         handleItemClick(e); // Call the first function
    //         window.scrollTo(0, 0); // Call the scroll functionality
    //       }}
    //     >
    //       <div>{label}</div>
    //     </Link>
    //     {children && (
    //       <button
    //         className={styles.mdHidden}
    //         onClick={onToggle}
    //         aria-label="Toggle dropdown"
    //         aria-haspopup="menu"
    //         aria-expanded={active ? 'true' : 'false'}
    //       >
    //         {active ? (
    //           <FiMinus size={20} className="mobile-only" />
    //         ) : (
    //           <FiPlus size={20} className="desktop-only" />
    //         )}
    //       </button>
    //     )}
    //   </div>
    //   {children && (
    //     <div
    //       role="menu"
    //       className={`${styles.dropdown} ${active ? 'h-auto' : 'h-0 overflow-hidden md:h-auto'}`}
    //     >
    //       <Container>
    //         <DropdownContent
    //           submenuscontent={children}
    //           setIsDrawerOpen={setIsDrawerOpen}
    //           handleClick={handleClick}
    //           parentLabel={label}
    //         />
    //       </Container>
    //     </div>
    //   )}
    // </li>
    <li>
      <div className={styles.nav_item_content}>
        <Link href={href} className={active ? styles.active : ''} onClick={handleItemClick}>
          <div>{label}</div>
        </Link>
        {children && (
          <button className={styles.mdHidden} onClick={onToggle} aria-label="Toggle dropdown">
            {active ? <FiMinus size={20} /> : <FiPlus size={20} />}
          </button>
        )}
      </div>

      {children && active && (
        <div className={styles.dropdown} role="menu">
          <Container>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
              parentLabel={label}
            />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;