import { TrackList } from "../TrackList/TrackList";
import styles from "./MainContent.module.css";

export const MainContent = () => {
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
