import styles from './button.module.css'
import Link from 'next/link'

interface ButtonProps {
    value: string
    style: string
    link?: string
}

export default function Button(props: ButtonProps): JSX.Element {
    const {value, style, link} = props
    return (
        <div className={`${styles.default} ${styles[style]}`}>
            <Link href={`/#${link}`}>
                {value}
            </Link>
        </div>
    )
}