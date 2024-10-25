import { TrackType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    currentPlaylist: TrackType[],
    tracks: TrackType[],
    isPlaying: boolean,
    isShuffle: boolean,
    shuffleTrackList: TrackType[],
    currentTrack: TrackType | null,
    currentTrackIndex: number,
    defaultTracks: TrackType[],
}

const initialState: initialStateType = {
    currentPlaylist: [],
    tracks: [],
    isPlaying: false,
    isShuffle: false,
    shuffleTrackList: [],
    currentTrack: null,
    currentTrackIndex: -1,
    defaultTracks: [],
};

const trackSlice = createSlice({
    name: "track",
    initialState,
    reducers: {
        // Редьюсер для установки треков
        setTrackState: (state, action: PayloadAction<TrackType>) => {
            state.currentPlaylist = state.tracks;
            state.currentTrack = action.payload;
            //state.currentTrackIndex = state.tracks.findIndex(track => track._id === action.payload._id);

        },
        setTracks: (state, action: PayloadAction<TrackType[]>) => {
            state.tracks = action.payload;
            state.defaultTracks = action.payload;
        },
        setNextTrack: (state) => {
            const playlist = !state.isShuffle ? state.tracks : state.defaultTracks;
            const currentTrackIndex = state.tracks.findIndex(track => track._id === state.currentTrack!._id);
            state.currentTrack = currentTrackIndex < playlist.length - 1
                ? playlist[currentTrackIndex + 1]
                : state.currentTrack;

        },
        setPrevTrack: (state) => {
            const playlist = !state.isShuffle ? state.tracks : state.defaultTracks;
            const currentTrackIndex = state.tracks.findIndex(track => track._id === state.currentTrack!._id);
            state.currentTrack = currentTrackIndex > 0
                ? playlist[currentTrackIndex - 1]
                : state.currentTrack;
        },

        setShuffle: (state) => {
            state.defaultTracks.sort(() => Math.random() - 0.5)

        },

        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            state.isShuffle = action.payload;
        },

        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

// Экспорт экшенов
export const {
    setTrackState,
    setTracks,
    setNextTrack,
    setPrevTrack,
    setShuffle,
    setIsShuffle,
    setIsPlaying } = trackSlice.actions;

// Экспорт редьюсера (экспорт по умолчанию)
export default trackSlice.reducer;
// export const TrackReducer = trackSlice.reducer;
