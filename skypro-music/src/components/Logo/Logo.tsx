import Image from "next/image"
import styles from "./Logo.module.css"

export const Logo = () => {
    return (
        <div className={styles.navLogo}>
        <Image className={styles.logoImage} src="/img/logo.png" alt="logo" width={113.33}
                height={17} />
      </div>
    );
}
