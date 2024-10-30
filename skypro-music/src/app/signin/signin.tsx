import Image from "next/image"
import styles from "./signin.module.css"


<div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form 
          className={styles.modalFormLogin } 
          action="#">
            <a>
              <div className={styles.modalLogo}>
                <Image
                 src="/img/logo_modal.png" 
                 alt="logo"
                 width={140}
                  height={21} 
                  />
              </div>
            </a>
            <input
              className={`${styles.modalInput} ${styles.login}`}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={`${styles.modalInput} ${styles.password}`}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modalBtnEnter}>
              <a>Войти</a>
            </button>
            <button className={styles.modalBtnSignup}>
              <a>Зарегистрироваться</a>
            </button>
          </form>
          <div className={styles.error}></div>
        </div>
      </div>
    </div>