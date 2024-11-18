"use client"
import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchFavoriteTracks } from "@/store/features/trackSlice";
import { TrackList } from "@/components/TrackList/TrackList";


export default function Favorites() {
  const dispatch = useAppDispatch();
  const { tokens } = useAppSelector(state => state.auth);
  //const { favoriteTracks } = useAppSelector((state) => state.tracksSlice); // Извлекаем список избранных треков
  const tracks = useAppSelector((state) => state.tracksSlice.tracks); 
  const likedTracks = useAppSelector((state) => state.tracksSlice.likedTracks);

  const filteredFavoriteTracks = tracks.filter((track) => likedTracks.includes(track._id));
   
  useEffect(() => {
    if (tokens.access) {
      dispatch(fetchFavoriteTracks()); // Загружаем избранные треки с сервера
    }
   
  }, [dispatch, tokens]);

  return (
    <div className={styles.mainCenterblock}>
            <h2 className={styles.centerblockH2}>Мои треки</h2>
            <div className={`${styles.centerblockContent} ${styles.playlistContent}`}>
                <TrackList tracks={filteredFavoriteTracks} />
            </div>
        </div>
    );



}


   