import React from 'react';
import styles from './Menu.module.css'

interface MenuProps {
    isMenuOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({isMenuOpen}) => {
    
    return (
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Главное</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Мой плейлист</a>
          </li>
          <li className={styles.menuItem}>
            <a href="../signin.html" className={styles.menuLink}>Войти</a>
          </li>
        </ul>
      </div>
 
    );
}
