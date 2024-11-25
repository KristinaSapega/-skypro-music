"use client";

import { useParams } from "next/navigation";
import styles from "../../favorites/page.module.css";
import { GetSelectionById, GetTracks } from "@/api/apiTrack";
import { TrackList } from "@/components/TrackList/TrackList";
import Filter from "@/components/Filter/Filter";
import { TrackType } from "@/types";
import { useEffect, useState } from "react";

export default function SelectionPage() {
  const { id } = useParams<{ id: string }>(); 
  const [selectionTracks, setSelectionTracks] = useState<TrackType[]>([]);
  const [selectionName, setSelectionName] = useState<string>(""); 
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // Получаем все треки
        const allTracks: TrackType[] = await GetTracks();
        // Получаем данные подборки
        const selection = await GetSelectionById(id);

        // Фильтруем треки на основе идентификаторов из подборки
        const filteredTracks = allTracks.filter((track) =>
          selection.items.includes(track._id)
        );

        setSelectionName(selection.name);
        setSelectionTracks(filteredTracks);
      } catch (error) {
        console.error("Ошибка при загрузке данных подборки:", error);
      }
    };

    getData();
  }, [id]);

  useEffect(() => {
    if (selectionName) {
      document.title = selectionName; 
    } else {
      document.title = "Треки"; 
    }
  }, [selectionName]);

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
      <h2 className={styles.centerblockH2}>{selectionName}</h2>
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
