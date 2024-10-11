import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Logo } from "../Logo/Logo"
import { Menu } from "../Menu/Menu"
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={styles.mainNav}>
          <Logo />
          <BurgerMenu />
          <Menu />
        </nav>
    )
}
