"use client"
import { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Logo } from "../Logo/Logo"
import { Menu } from "../Menu/Menu"
import styles from "./NavBar.module.css"

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState (false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    return (
        <nav className={styles.mainNav}>
          <Logo />
          <BurgerMenu toggleMenu={toggleMenu}/>
          <Menu isMenuOpen={isMenuOpen}/>
        </nav>
    )
}
