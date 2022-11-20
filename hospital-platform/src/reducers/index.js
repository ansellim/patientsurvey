import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import feedbackItems from "./feedbackItems";

// export default combineReducers({
//     feedbackItems
// });

const reducers = combineReducers({
  feedbackItems,
});

let store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
