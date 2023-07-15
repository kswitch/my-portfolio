import Link from "next/link";
import styles from './nabaritem.module.css'

export default function NavbarItem({value}:{value:string}): JSX.Element {
    const link = value === "Home" ? "" : value === "Blog" ? value.toLowerCase() : `#${value.toLowerCase()}`

    return <Link href={`/${link}`} className={styles.navbarItem}>{value}</Link>
}