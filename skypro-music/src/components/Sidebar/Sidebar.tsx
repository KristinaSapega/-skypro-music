"use client"

import Image from "next/image"
import styles from "./Sidebar.module.css"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect, useState } from "react";
import { logoutDone } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { fetchFavoriteTracks } from "@/store/features/trackSlice";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const {tokens} = useAppSelector(state => state.auth);
   

  //const { authState } = useAppSelector((state) => state.auth);
  const [userName, setUsername] = useState<string>("");
  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    if (storeUsername) {
      setUsername(storeUsername)
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    setUsername("");
    dispatch(logoutDone());
    router.push("/");
  }

  
  useEffect(() => {
    if (tokens.access) {
      dispatch(fetchFavoriteTracks());
    }
   
  }, [dispatch, tokens]);
  
    return (
        <div className={styles.mainSidebar}>
          <div className={styles.sidebarPersonal}>
            <p className={styles.sidebarPersonalName}>{userName || "Гость"}</p>
            <div onClick={handleLogout} className={styles.sidebarIcon}>
              <svg>
                <use xlinkHref="/img/icon/sprite.svg#logout"></use>
              </svg>
            </div>
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarList}>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist01.png"
                    alt="day's playlist"
                    width={250}
                    height={170}
                  />
                </a>
              </div>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist02.png"
                    alt="day's playlist"
                    width={250}
                    height={170}
                  />
                </a>
              </div>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist03.png"
                    alt="day's playlist"
                    width={250}
                    height={170}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}
