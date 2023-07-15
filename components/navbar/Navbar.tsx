import styles from "./navbar.module.css"
import NavbarItem from "./NavbarItem";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
        <NavbarItem value="Work" />
        <NavbarItem value="About" />
        <NavbarItem value="Contact" />
        <NavbarItem value="Blog" />
    </nav>
);
}
