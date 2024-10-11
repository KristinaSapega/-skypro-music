import { TrackType } from "@/types";
import { Track } from "../Track/Track";
import styles from "./TrackList.module.css"

interface TrackListProps {
    tracks: TrackType[];
}
// const tracks = [
//     { title: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
//     { title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "3:22" },
//     { title: "I'm Fire", author: "Ali Bakgor", album: "I'm Fire", time: "2:45" },
//     { title: "Non Stop", author: "Стоункат, Psychopath", album: "Non Stop", time: "4:12" },
//     { title: "Run Run", author: "Jaded, Will Clarke, AR/CO", album: "Run Run", time: "2:54" },
//     { title: "Eyes on Fire", author: "Blue Foundation, Zeds Dead", album: "Eyes on Fire", time: "5:20" },
//     { title: "Mucho Bien", author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile", album: "Mucho Bien", time: "3:41" },
//     { title: "Knives n Cherries", author: "minthazee", album: "Captivating", time: "1:48" },
//   ];
  
  export const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
      <div className={styles.contentPlaylist}>
        {tracks.map((track, index) => (
          <div key={index} className={styles.playlistItem}>
            <Track title={track.name} author={track.author} album={track.album} time={new Date(track.duration_in_seconds * 1000).toISOString().substr(14, 5)} />
          </div>
        ))}
      </div>
    );
  }



