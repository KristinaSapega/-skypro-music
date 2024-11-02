"use client"
import { GetTracks } from "@/api/apiTrack";
import { MainContent } from "@/components/MainContent/MainContent";
import { setTracks } from "@/store/features/trackSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect, useState } from "react";


export default function TracksPage () {
    const dispatch = useAppDispatch();
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const data = await GetTracks();
                console.log("API Data:", data);
                // setTracks(data);
                dispatch(setTracks(data)); // Диспатчим данные треков в Redux
            }catch (error) {
                if(error instanceof Error) {
                    setError(error.message)
                  }
              }
        };
        fetchTracks(); 
      }, []); 

    //   if (error) {
    //     return <div className={styles.errorMessage}>Ошибка: {error}</div>;
    //   }
    return (
        <MainContent />
    )
}