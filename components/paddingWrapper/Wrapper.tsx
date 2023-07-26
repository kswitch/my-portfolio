import { ReactNode } from 'react'
import classes from './wrapper.module.css'

export default function Wrapper({styles, children}: {styles:string[], children: ReactNode}): JSX.Element {
    return (
        <div className={`${styles.map(style => (`${classes[style]}`)).join(" ")}`}>
            {children}
        </div>
    )
}