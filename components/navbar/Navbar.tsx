import { Fragment } from "react";
import Hamburger from "./Hamburger";
import styles from "./navbar.module.css"
import NavbarItem from "./NavbarItem";

export default function Navbar(): JSX.Element {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <NavbarItem value="Home" />
        <NavbarItem value="Work" />
        <NavbarItem value="About" />
        <NavbarItem value="Contact" />
        <NavbarItem value="Blog" />
      </nav>
      <Hamburger />
    </Fragment>
);
}
