import styles from "./BurgerMenu.module.css"

export const BurgerMenu = () => {
    return (
        <div className={styles.navBurger}>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </div>
    );
}
 