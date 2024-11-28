import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MainContent } from "@/components/MainContent/MainContent";
import playlistReducer from "@/store/features/trackSlice";
import { useAppSelector, useAppDispatch } from "./store/store";

jest.mock("./store/store", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}));

const store = configureStore({
    reducer: {
        tracksSlice: playlistReducer,
    },
});

const tracks = [
    {
        _id: 1,
        name: "Track 1",
        author: "Artist 1",
        release_date: "2020-01-01",
        genre: ["Pop"],
        duration_in_seconds: 200,
        album: "Album 1",
        logo: { type: "Buffer", data: [] },
        track_file: "https://example.com/track1.mp3",
        staredUser: [],
    },
    {
        _id: 2,
        name: "Track 2",
        author: "Artist 2",
        release_date: "2020-01-02",
        genre: ["Rock"],
        duration_in_seconds: 180,
        album: "Album 2",
        logo: { type: "Buffer", data: [] },
        track_file: "https://example.com/track2.mp3",
        staredUser: [],
    },
];

(useAppSelector as jest.Mock).mockImplementation((selector) =>
    selector({
        auth: { tokens: "fake-token", username: "testUser" },
        tracksSlice: { tracks, likedTracks: [] },
    })
);

const setup = () =>
    render(
        <Provider store={store}>
            <MainContent />
        </Provider>
    );

    describe("MainContent", () => {
        const dispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    
        it("renders the list of tracks", () => {
            setup();
    
            const track1 = screen.getByText("Track 1");
            const track2 = screen.getByText("Track 2");
    
            expect(track1).toBeInTheDocument();
            expect(track2).toBeInTheDocument();
        });
    
        it("displays 'Треки не найдены' if no tracks exist", () => {
            (useAppSelector as jest.Mock).mockImplementation((selector) =>
                selector({
                    auth: { tokens: "fake-token", username: "testUser" },
                    tracksSlice: { tracks: [], likedTracks: [] },
                })
            );
    
            setup();
    
            expect(screen.getByText("Треки не найдены")).toBeInTheDocument();
        });
    
        it("filters tracks by author", () => {
            setup();
    
            fireEvent.click(screen.getByText("исполнителю"));
            fireEvent.click(screen.getByText("Artist 1"));
    
            const track1 = screen.getByText("Track 1");
            expect(track1).toBeInTheDocument();
            expect(screen.queryByText("Track 2")).not.toBeInTheDocument();
        });
    
        it("sorts tracks by release date", () => {
            setup();
    
            fireEvent.click(screen.getByText("году выпуска"));
            fireEvent.click(screen.getByText("Сначала новые"));
    
            const firstTrack = screen.getAllByText(/Track/)[0];
            expect(firstTrack).toHaveTextContent("Track 2");
        });
    
        it("searches tracks by name", () => {
            setup();
    
            const searchInput = screen.getByPlaceholderText("Поиск");
            fireEvent.change(searchInput, { target: { value: "Track 1" } });
    
            const track1 = screen.getByText("Track 1");
            expect(track1).toBeInTheDocument();
            expect(screen.queryByText("Track 2")).not.toBeInTheDocument();
        });
    });
    