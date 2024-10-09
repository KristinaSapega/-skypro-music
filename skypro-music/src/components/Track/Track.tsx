import styles from "./Track.module.css"

interface TrackProps {
    title: string;
    author: string;
    album: string;
    time: string;

}

export const Track: React.FC<TrackProps> = ({title, author, album, time}) => {
    return (

        <div className={styles.playlisTrack}>
            <div className={styles.trackTitle}>
                <div className={styles.trackTitleImage}>
                    <svg className={styles.trackTitleSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </svg>
                </div>
                <div className="track__title-text">
                    <a className={styles.trackTitleLink} href="http://">
                        {title}
                        <span className="track__title-span"></span>
                    </a>
                </div>
            </div>
            <div className={styles.trackAuthor}>
                <a className={styles.trackAuthorLink}href="http://">{author}</a>
            </div>
            <div className={styles.trackAlbum}>
                <a className={styles.trackAlbumLink} href="http://">{album}</a>
            </div>
            <div className="track__time">
                <svg className={styles.trackTimeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.trackTimeText}>{time}</span>
            </div>
        </div>
    );
}
          
  
