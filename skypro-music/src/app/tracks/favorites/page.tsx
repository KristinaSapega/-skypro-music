"use client"
import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchFavoriteTracks } from "@/store/features/trackSlice";
import { TrackList } from "@/components/TrackList/TrackList";


export default function Favorites() {
  const dispatch = useAppDispatch();
  const { favoriteTracks } = useAppSelector((state) => state.tracksSlice);
  const {tokens, username: user} = useAppSelector(state => state.auth);
   

  useEffect(() => {
    if (tokens.access) {
      dispatch(fetchFavoriteTracks());
    }
   
  }, [dispatch, tokens]);

  return (
    <div className={styles.mainCenterblock}>
            <h2 className={styles.centerblockH2}>Мои треки</h2>
            <div className={`${styles.centerblockContent} ${styles.playlistContent}`}>
                <TrackList tracks={favoriteTracks} />
            </div>
        </div>
    );



}


   