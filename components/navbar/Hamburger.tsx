// import { useEffect, useState } from 'react'
import styles from './hamburger.module.css'

interface HamburgerProps {
    menuState: boolean,
    openOrCloseMenu: Function
}

export default function Hamburger({menuState, openOrCloseMenu}: HamburgerProps):JSX.Element {
    
    function openCloseMenu(): void {
        openOrCloseMenu()
    }

    return (
        <div className={`${styles.hamburger} ${menuState ? 'open' : ''}`} onClick={openCloseMenu}>
            <span className={`${styles.bar} bar`}></span>
            <span className={`${styles.bar} bar`}></span>
            <span className={`${styles.bar} bar`}></span>
        </div>
    )
}