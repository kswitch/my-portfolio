import styles from './button.module.css'
import Link from 'next/link'

interface ButtonProps {
    value: string
    style: string
    link?: string
    target?: string
}

export default function Button({value, style, link, target}: ButtonProps): JSX.Element {
    return (
        <div className={`${styles.default} ${styles[style]}`}>
            <Link href={`${link}`} target={target}>
                {value}
            </Link>
        </div>
    )
}