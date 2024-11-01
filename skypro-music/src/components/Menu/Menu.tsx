import React from 'react';
import styles from './Menu.module.css'
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import { logoutDone } from '@/store/features/authSlice';
import Link from 'next/link';

interface MenuProps {
    isMenuOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({isMenuOpen}) => {

  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(state => state.auth.authState)

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear()
    dispatch(logoutDone())
    router.push("/")
  }
    
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
           { isAuth ? (<div onClick={handleLogout} className={styles.menuLink}>Выйти</div>) : (<Link href="/signin" className={styles.menuLink}>Войти</Link>)}
          </li>
        </ul>
      </div>
 
    );
}
