import { AddTrackFavorite, DeleteTrackFavorite } from "@/api/apiTrack";
import { dislikeTrack, likeTrack } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useState } from "react";

export const useLikeTrack = (trackId: number) => {
    const dispatch = useAppDispatch();
    const { tokens, username: user } = useAppSelector(state => state.auth);
    const likedTracks = useAppSelector(state => state.tracksSlice.likedTracks);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);

    const isLiked = likedTracks.some(track => track === trackId);

    const toggleLike = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!tokens || !user) {
            alert("Необходимо авторизоваться");
            return;
        }

        const action = isLiked ? DeleteTrackFavorite : AddTrackFavorite

        try {
            await action({ _id: trackId, token: tokens.access })
            if (isLiked) {
                dispatch(dislikeTrack(trackId));
            } else {
                dispatch(likeTrack(trackId));
            }
            setError(null)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("Ошибка при изменении лайка");
        }
    }
    return { isLiked, toggleLike };

}