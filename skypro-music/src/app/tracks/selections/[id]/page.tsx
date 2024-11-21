"use client";
import styles from "../../favorites/page.module.css";
import { useEffect, useState } from "react";
import { GetSelectionById } from "@/api/apiTrack";
import { TrackList } from "@/components/TrackList/TrackList";
import Filter from "@/components/Filter/Filter";
import { TrackType } from "@/types";

export default function SelectionPage({ params }: { params: { id: string } }) {
  const [selectionTracks, setSelectionTracks] = useState<TrackType[]>([]);
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchSelectionTracks = async () => {
      try {
        const data = await GetSelectionById(params.id);
        setSelectionTracks(data.tracks);
      } catch (err) {
        console.error("Ошибка при загрузке подборки", err);
      }
    };

    fetchSelectionTracks();
  }, [params.id]);

  const uniqueAuthors = Array.from(new Set(selectionTracks.map((track) => track.author)));
  const uniqueGenres = Array.from(
    new Set(selectionTracks.flatMap((track) => track.genre))
  );
  const uniqueReleaseDate = Array.from(
    new Set(
      selectionTracks.map((track) =>
        new Date(track.release_date).getFullYear().toString()
      )
    )
  );

  const toggleFilter = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>Подборка {params.id}</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div
          className={`${styles.filterButton} ${
            openFilter === "author" ? styles.active : ""
          }`}
          onClick={() => toggleFilter("author")}
        >
          исполнителю
          {openFilter === "author" && <Filter filterList={uniqueAuthors} />}
        </div>
        <div
          className={`${styles.filterButton} ${
            openFilter === "releaseDate" ? styles.active : ""
          }`}
          onClick={() => toggleFilter("releaseDate")}
        >
          году выпуска
          {openFilter === "releaseDate" && (
            <Filter filterList={uniqueReleaseDate} />
          )}
        </div>
        <div
          className={`${styles.filterButton} ${
            openFilter === "genre" ? styles.active : ""
          }`}
          onClick={() => toggleFilter("genre")}
        >
          жанру
          {openFilter === "genre" && <Filter filterList={uniqueGenres} />}
        </div>
      </div>
      <div className={`${styles.centerblockContent} ${styles.playlistContent}`}>
        <TrackList tracks={selectionTracks} />
      </div>
    </div>
  );
}
