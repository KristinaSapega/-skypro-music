import { TrackType } from "@/types";

const URL = "https://webdev-music-003b5b991590.herokuapp.com";
export const GetTracks = async ():Promise<TrackType[]> => {
    const response = await fetch(URL + "/catalog/track/all/");
    if(!response.ok) {
        throw new Error ("Ошибка при получении данных");
    }
    const data = await response.json();
    return data.data;
}

export const GetFavoriteTracks = async () => {
    const token = localStorage.getItem('access')

    const response = await fetch(URL + "/catalog/track/favorite/all/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });
    if(!response.ok) {
        throw new Error ("Данные не получены")
    }
    return response.json().then((data) => {
        if (data.error) {
            throw new Error(data.error)
        }
        return data.data;
    })
};

export interface LikeTypesProps {
    _id: number; 
    token: string;   
}

export const AddTrackFavorite = async ({_id:id, token}:LikeTypesProps) => {
    console.log(token)
    try {
        const response = await fetch(`${URL}/catalog/track/${id}/favorite/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        return response.json();
    } catch(error) {
        if (error instanceof Error)
        console.error(error.message);
    }
}

// Получить трек по id GET
export const getTrackForId = "/catalog/track/<id>/";


// Добавить трек в избранное по id POST *
export const addFavoritesForId = "/catalog/track/favorite/all/";

// Удалить трек из избранного по id DELETE *
export const dellFavoritesForId = "/catalog/track/<id>/favorite/";

// Создать подборкy POST *
export const addSelection = "/catalog/selection";

// Просмотреть подборки GET
export const viewSelection = "/catalog/selection/all";

// Просмотреть подборку по id
export const viewSelectionForId = "/catalog/selection/<id>/";

//Запросы отмеченные * требуют авторизацию.