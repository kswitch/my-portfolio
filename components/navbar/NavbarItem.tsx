import Link from "next/link";
import styles from './nabaritem.module.css'

export default function NavbarItem({value}:{value:string}): JSX.Element {
    let link
    if (value === 'Blog') {
        link = value.toLowerCase()
    }
    else {
        link = `#${value.toLowerCase()}`
    }

    return <Link href={`/${link}`} className={styles.navbarItem}>{value}</Link>
}