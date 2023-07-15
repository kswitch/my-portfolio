import { Fragment, useState } from "react";
import Hamburger from "./Hamburger";
import styles from "./navbar.module.css"
import NavbarItem from "./NavbarItem";

export default function Navbar(): JSX.Element {
  const [isMenuOpened, setMenuOpened] = useState(false)

  function openOrCloseMenu(): void {
    
    if (window.screen.width <= 399) {
      setMenuOpened(!isMenuOpened)
    }
  }  

  return (
    <Fragment>
      <nav className={`${styles.navbar}`} id={`${isMenuOpened ? 'navbarOpened' : ''}`}>
        <NavbarItem 
          value="Home"
          openOrCloseMenu={openOrCloseMenu} 
        />
        <NavbarItem 
          value="Work"
          openOrCloseMenu={openOrCloseMenu} 
        />
        <NavbarItem 
          value="About"
          openOrCloseMenu={openOrCloseMenu} 
        />
        <NavbarItem 
          value="Contact"
          openOrCloseMenu={openOrCloseMenu} 
        />
        <NavbarItem 
          value="Blog"
          openOrCloseMenu={openOrCloseMenu} 
        />
      </nav>
      <Hamburger
        menuState={isMenuOpened}
        openOrCloseMenu={openOrCloseMenu}
      />
    </Fragment>
  )  
}
