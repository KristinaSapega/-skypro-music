import { TrackType } from "@/types";
import { Track } from "../Track/Track";
import styles from "./TrackList.module.css"
import { useAppSelector } from "@/store/store";

interface TrackListProps {
    tracks: TrackType[];
}

export const TrackList = ({tracks}:TrackListProps) => {

  //const { tracks } = useAppSelector(state => state.tracksSlice);
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track, index) => (
        <div key={index} className={styles.playlistItem}>
          <Track
            track={track}
          />
        </div>
      ))}
    </div>
  );
}



