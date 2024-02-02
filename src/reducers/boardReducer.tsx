import {Direction, initBoard, moveHorizontal, moveVertical} from "@/components/components/board/board";

export type StateType = {
    arr: number[][]
    score:number
}
const initialState:StateType = {
    arr: initBoard(),
    score:0
};

const boardReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'MOVE_UP':
            const upResult = moveVertical(Direction.UP, state.arr,state.score);
            return {
                ...state,
                arr: upResult.arr,
                score: upResult.score,
            };
        case 'MOVE_DOWN':
            const downResult = moveVertical(Direction.DOWN, state.arr,state.score);
            return {
                ...state,
                arr: downResult.arr,
                score: downResult.score,
            };
        case 'MOVE_LEFT':
            const leftResult = moveHorizontal(Direction.LEFT, state.arr,state.score);
            return {
                ...state,
                arr: leftResult.arr,
                score: leftResult.score,
            };
        case 'MOVE_RIGHT':
            const rightResult = moveHorizontal(Direction.RIGHT, state.arr,state.score);
            return {
                ...state,
                arr: rightResult.arr,
                score: rightResult.score,
            };
        default:
            return state;
    }
};

export default boardReducer;
