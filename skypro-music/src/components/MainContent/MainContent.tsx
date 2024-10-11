"use client"
import { GetTracks } from "@/api/apiTrack";
import { TrackList } from "../TrackList/TrackList";
import styles from "./MainContent.module.css";
import { TrackType } from "@/types";
import { useEffect, useState } from "react";

export const MainContent = () => {
    const [tracks, setTracks] = useState<TrackType[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
    const fetchTracks = async () => {
        try {
            const data = await GetTracks();
            console.log("API Data:", data);
            setTracks(data);
        }catch (error) {
            if(error instanceof Error) {
                setError(error.message)
              }
          }
    };
    fetchTracks(); // Вызываем функцию при монтировании компонента
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз при монтировании
  // Если ошибка, выводим её на экран
  if (error) {
    return <div className={styles.errorMessage}>Ошибка: {error}</div>;
  }
    return (
        <div className={styles.mainCenterblock}>
          <div className={styles.centerblockSearch}>
            <svg className={styles.searchSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
              className={styles.searchText}
              type="search"
              placeholder="Поиск"
              name="search"
            />
          </div>
          <h2 className={styles.centerblockH2}>Треки</h2>
          <div className={styles.centerblockFilter}>
            <div className={styles.filterTitle}>Искать по:</div>
            <div className={styles.filterButton}>
              исполнителю
            </div>
            <div className={styles.filterButton}>
              году выпуска
            </div>
            <div className={styles.filterButton}>жанру</div>
          </div>
          <div className={`${styles.centerblockContent} ${styles.playlistContent}`}>
            <div className={`${styles.contentTitle} ${styles.playlistTitleCol}`}>
              <div className={`${styles.playlistTitleCol} ${styles.col01}`}>Трек</div>
              <div className={`${styles.playlistTitleCol} ${styles.col02}`}>Исполнитель</div>
              <div className={`${styles.playlistTitleCol} ${styles.col03}`}>Альбом</div>
              <div className={`${styles.playlistTitleCol} ${styles.col04}`}>
                <svg className={styles.playlistTitleSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                </svg>
              </div>
            </div>
            <TrackList />
          </div>
        </div>

    );
}
