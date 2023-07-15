import { Fragment, useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import styles from "./navbar.module.css"
import NavbarItem from "./NavbarItem";

export default function Navbar(): JSX.Element {
  const [isMenuOpened, setMenuOpened] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  function openOrCloseMenu(): void {
    if (windowWidth <= 399) {
      setMenuOpened(!isMenuOpened)
    }
  } 

  function handleWindowResize(): void {
    setWindowWidth(window.innerWidth);
  };
  
  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize); // Add Event Listener
    return () => window.removeEventListener('resize', handleWindowResize) // CleanUp Event Listener
  });

  return (
    <Fragment>
      <nav className={`${styles.navbar}`} id={`${isMenuOpened && (windowWidth <= 399) ? 'navbarOpened' : ''}`}>
        <NavbarItem value="Home" openOrCloseMenu={openOrCloseMenu} />
        <NavbarItem value="Works" openOrCloseMenu={openOrCloseMenu} />
        <NavbarItem value="About" openOrCloseMenu={openOrCloseMenu} />
        <NavbarItem value="Contact" openOrCloseMenu={openOrCloseMenu} />
        <NavbarItem value="Blog" openOrCloseMenu={openOrCloseMenu} />
      </nav>
      <Hamburger menuState={isMenuOpened} openOrCloseMenu={openOrCloseMenu} />
    </Fragment>
  )  
}