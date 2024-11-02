import { AddTrackFavorite, LikeTypesProps } from "@/api/apiTrack";
import { TrackType } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


// const favoriteTracks = createAsyncThunk("track/favoriteTracks", async (accessToken: string) => {
//     const favTracks = await 

// })

export const likedFavTrack = createAsyncThunk("track/likeFavTrack", async ({_id, token}:LikeTypesProps) => {
    return await AddTrackFavorite({_id, token});
} )

type initialStateType = {
    currentPlaylist: TrackType[],
    tracks: TrackType[],
    isPlaying: boolean,
    isShuffle: boolean,
    shuffleTrackList: TrackType[],
    currentTrack: TrackType | null,
    currentTrackIndex: number,
    defaultTracks: TrackType[],
    likedTracks: number[],
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
    likedTracks:[],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        // Редьюсер для установки треков
        setTrackState: (state, action: PayloadAction<TrackType>) => {
            state.currentPlaylist = state.tracks;
            state.currentTrack = action.payload;

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
        setIsPlaying: (state, action: PayloadAction<boolean>) => { //воспроизводится трек или остановлен
            state.isPlaying = action.payload;
        },
        likeTrack: (state, action: PayloadAction<number>) => {
            if (!state.likedTracks.includes(action.payload)) {
                state.likedTracks.push(action.payload)
            }
        },
        dislikeTrack: (state, action: PayloadAction<number>) => {
            state.likedTracks = state.likedTracks.filter((_id) => _id !== action.payload)
        }

    },

    extraReducers: builder => {
        builder.addCase(likedFavTrack.fulfilled, (state, action: PayloadAction<number>) => {
            state.likedTracks.push(action.payload)
        })
        // builder.addCase(apiTrack.getFavoriteTracks.fulfilled, (state, action) => {
        //     state.likedTracks = action.payload
        // })
    }
});

// Экспорт экшенов
export const {
    setTrackState,
    setTracks,
    setNextTrack,
    setPrevTrack,
    setShuffle,
    setIsShuffle,
    setIsPlaying,
    likeTrack,
    dislikeTrack} = playlistSlice.actions;

// Экспорт редьюсера (экспорт по умолчанию)
export default playlistSlice.reducer;

// export const TrackReducer = trackSlice.reducer;
