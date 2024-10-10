import styles from "./Bar.module.css"


export const Bar = () => {
    return (
        <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress}></div>
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                  <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={`${styles.playerBtnPlay} ${styles.btn}`}>
                  <svg className={styles.playerBtnPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                  <svg className={styles.playerBtnNextSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={`${styles.playerBtnRepeat} ${styles.btnIcon}`}>
                  <svg className={styles.playerBtnRepeatSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={`${styles.playerBtnShuffle} ${styles.btnIcon}`}>
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={`${styles.playerTrackPlay} ${styles.trackPlay}`}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <a className="track-play__author-link" href="http://"
                      >Ты та...</a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <a className="track-play__album-link" href="http://">Баста</a>
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div className={`${styles.trackPlayLike} ${styles.btnIcon}`}>
                    <svg className={styles.trackPlayLikeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={`${styles.barVolumeBlock} ${styles.volume}`}>
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use
                        xlinkHref="/img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.barVolumeBlock} ${styles.volume}`}>
              <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                  <svg className={styles.volumeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={`${styles.volumeProgress} ${styles.btn}`}>
                  <input
                    className={`${styles.volumeProgressLine} ${styles.btn}`}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
