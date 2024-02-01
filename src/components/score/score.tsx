import {useSelector} from "react-redux";

export const Score = () => {
    const score: number = useSelector(state => state.score);
    return (
        <div className="text-xl board-background pl-14 pr-14 p-3 rounded-lg text-center font-extrabold">
            <p className="text-neutral-200 font-extrabold">
                Score:
            </p>
            <p className="text-neutral-50">
                {score}
            </p>
        </div>
    )
}
