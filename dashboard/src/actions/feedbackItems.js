import * as api from "../api";

// action creator
export const getFeedbackItems = () => async (dispatch) => {

    try {
        const { data } = await api.fetchFeedback();
        // console.log(data);
        const action = { type: 'FETCH_ALL', payload: data }
        dispatch(action);

    } catch (error) {
        console.log(error.message)
    }

}