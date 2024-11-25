import {render, screen} from "@testing-library/react";
import {Track} from "@/components/Track/Track";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import TrackReducer  from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { Provider } from "react-redux";
import { useLikeTrack } from "./hooks/useLikeTrack";

jest.mock("./store/store", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn()
}))

jest.mock("./hooks/useLikeTrack", () => ({
    useLikeTrack: jest.fn(), 
    __esModule: true,
})) 

const store = configureStore({
    reducer:{
        tracksSlice: TrackReducer,
    }
}) 
const track = {
    "_id": 35,
    "name": "Hard Metal Intro",
    "author": "Winniethemoog",
    "release_date": "1991-09-06",
    "genre": [
    "Рок музыка"
    ],
    "duration_in_seconds": 255,
    "album": "Hard Metal",
    "logo": {
    "type": "Buffer",
    "data": []
    },
    "track_file": "https://webdev-music-003b5b991590.herokuapp.com/media/music_files/Winniethemoog__-_Hard_Metal_Intro.mp3",
    "staredUser": []
}

const setup = () => 
    render(
        <Provider store = {store}>
    <Track track={track}/>
    </Provider>
    )
    
describe("Track", () => {
    (useLikeTrack as jest.Mock).mockReturnValue({isLiked: false, toggleLike: jest.fn()});
    (useAppSelector as jest.Mock).mockImplementation((selector) => 
        selector({tracksSlice: {
            currentTrack: null, 
            isPlaying: false,
        },}));
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    it("Props of Track", () => {
        setup()
        const trackName = screen.getByText("Hard Metal Intro")
        expect(trackName).toBeInTheDocument()
    })

}) 