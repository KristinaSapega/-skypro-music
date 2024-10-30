import Image from "next/image";
import styles from "./signup.module.css"
import { useAppDispatch } from "@/store/store";

const Signup = () => {
    const dispatch = useAppDispatch();
    
}

<div className={styles.wrapper}>
    <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
            <form className={styles.modalFormLogin}>
                <a href="../">
                    <div className={styles.modalLogo}>
                        <Image
                            src="/img/logo_modal.png"
                            alt="logo"
                            width={140}
                            height={21} />
                    </div>
                </a>
                <input
                    className={`${styles.modalInput} ${styles.login}`}
                    type="text"
                    name="login"
                    placeholder="Почта"
                />
                <input
                    className={`${styles.modalInput} ${styles.passwordFirst}`}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
                <input
                    className={`${styles.modalInput} ${styles.passwordDouble}`}
                    type="password"
                    name="password"
                    placeholder="Повторите пароль"
                />
                <button className={styles.modalBtnSignupEnt}>
                    <a>Зарегистрироваться</a>
                </button>
            </form>
            <div className={styles.error}></div>
        </div>
    </div>
</div>