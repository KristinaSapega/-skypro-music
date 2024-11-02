import { dislikeTrack, likedFavTrack, likeTrack } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useState } from "react";

export const useLikeTrack = (trackId: number) => {
    const dispatch = useAppDispatch();
    const {tokens, username: user} = useAppSelector(state => state.auth);
    const likedTracks = useAppSelector(state => state.tracksSlice.likedTracks);
    const [error, setError] = useState<string | null>(null);

    const isLiked = likedTracks.some(track => track === trackId);

const toggleLike = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!tokens || !user) {
        alert("Необходимо авторизоваться")
        return;
    }

    try {
        if (isLiked) {
            await dispatch(dislikeTrack(trackId));
        } else {
            await dispatch(likedFavTrack({_id:trackId, token:tokens.access}));
        }
        setError(null)
    }catch (error) {
        setError("")
    }
}
return {isLiked, toggleLike};

}