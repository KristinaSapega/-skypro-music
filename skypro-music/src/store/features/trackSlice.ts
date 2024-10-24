import { TrackType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    currentPlaylist: TrackType[],
    tracks: TrackType[],
    isPlaying: boolean,
    isShuffle: boolean,
    shuffleTrackList: TrackType[],
    currentTrack: TrackType | null,

}

const initialState: initialStateType = {
    currentPlaylist: [],
    tracks: [],
    isPlaying: false,
    isShuffle: false,
    shuffleTrackList: [],
    currentTrack: null,
};

const trackSlice = createSlice({
    name: "track",
    initialState,
    reducers: {
        // Редьюсер для установки треков
        setTrackState: (state, action: PayloadAction<TrackType>) => {
            state.currentPlaylist = state.tracks;
            state.currentTrack = action.payload;

        },
        setTracks: (state, action: PayloadAction<TrackType[]>) => {
            state.tracks = action.payload;
        }
    },
});

// Экспорт экшенов
export const { setTrackState, setTracks } = trackSlice.actions;
// Экспорт редьюсера (экспорт по умолчанию)
export default trackSlice.reducer;
// export const TrackReducer = trackSlice.reducer;
