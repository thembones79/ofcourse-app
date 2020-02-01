import produce from "immer";
import {
  ADD_LESSON_BEGIN,
  ADD_LESSON_SUCCESS,
  ADD_LESSON_ERROR
} from "../actions";

const initialState = {
  lessons: [],
  lessonSaveInProgress: false,
  lessonSaveError: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_LESSON_SUCCESS:
      draft.lessons.push(action.payload);
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
