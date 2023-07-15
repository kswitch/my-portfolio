import Link from "next/link";
import styles from "./navbaritem.module.css";

interface NavbarItemProp {
  value: string
  openOrCloseMenu: Function;
}

export default function NavbarItem({value, openOrCloseMenu}: NavbarItemProp): JSX.Element {
  const link:string = value === "Home" ? "" : value === "Blog" ? value.toLowerCase() : `#${value.toLowerCase()}`;

    function openCloseMenu(): void {
        openOrCloseMenu()
    }

  return (
    <Link href={`/${link}`} className={styles.navbarItem} onClick={openCloseMenu}>
      {value}
    </Link>
  );
}
