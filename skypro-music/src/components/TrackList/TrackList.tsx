import { Track } from "../Track/Track";
import styles from "./TrackList.module.css"


const tracks = [
    { title: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
    { title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "3:22" },
    { title: "I'm Fire", author: "Ali Bakgor", album: "I'm Fire", time: "2:45" },
    { title: "Non Stop", author: "Стоункат, Psychopath", album: "Non Stop", time: "4:12" },
  ];
  
  export const TrackList = () => {
    return (
      <div className={styles.contentPlaylist}>
        {tracks.map((track, index) => (
          <div key={index} className={styles.playlistItem}>
            <Track title={track.title} author={track.author} album={track.album} time={track.time} />
          </div>
        ))}
      </div>
    );
  }


// export const TrackList = () => {
//     return (
//         <div className={styles.contentPlaylist}>
//               <div className={styles.playlistItem}>
//                 <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               <div className={styles.playlistItem}>
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               <div className={styles.playlistItem}>
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               <div className={styles.playlistItem}>
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}

//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>

//               <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}

//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>
//               <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>
//               <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}
//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div>
//               <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}
//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}

//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}

//               {/* <div className="playlist__item">
//               <Track title="Название трека" author="Имя исполнителя" album="Название альбома" time="3:45" />
//               </div> */}

//               {/* <div className="playlist__item">
//                 <div className="playlist__track track">
//                   <div className="track__title">
//                     <div className="track__title-image">
//                       <svg className="track__title-svg">
//                         <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
//                       </svg>
//                     </div>
//                     <div className="track__title-text">
//                       <a className="track__title-link" href="http://">
//                         <span className="track__title-span"></span
//                       ></a>
//                     </div>
//                   </div>
//                   <div className="track__author">
//                     <a className="track__author-link" href="http://"></a>
//                   </div>
//                   <div className="track__album">
//                     <a className="track__album-link" href="http://"></a>
//                   </div>
//                   <div className="track__time">
//                     <svg className="track__time-svg">
//                       <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
//                     </svg>
//                     <span className="track__time-text"></span>
//                   </div>
//                 </div>
//               </div> */}
//             </div>

//     );
// }
