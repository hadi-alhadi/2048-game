import { createStore } from 'redux';
import boardReducer from "@/components/reducers/boardReducer";

const store = createStore(boardReducer);

export default store;
