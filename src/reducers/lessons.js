import produce from "immer";
import {
  ADD_LESSON_BEGIN,
  ADD_LESSON_SUCCESS,
  ADD_LESSON_ERROR,
  LOAD_LESSONS_BEGIN,
  LOAD_LESSONS_SUCCESS,
  LOAD_LESSONS_ERROR,
  RESET_LESSON_ERROR
} from "../actions";

const initialState = {
  lessonsLoading: false,
  lessonsError: null,
  lessons: [],
  lessonSaveInProgress: false,
  lessonSaveError: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_LESSON_BEGIN:
      draft.lessonSaveInProgress = true;
      draft.lessonSaveError = null;
      return;
    case ADD_LESSON_SUCCESS:
      draft.lessons.push(action.payload);
      draft.lessonSaveInProgress = false;
      draft.lessonSaveError = null;
      return;
    case ADD_LESSON_ERROR:
      draft.lessonSaveInProgress = false;
      draft.lessonSaveError = action.error;
      return;
    case LOAD_LESSONS_BEGIN:
      draft.lessonsLoading = true;
      draft.lessonsError = null;
      return;
    case LOAD_LESSONS_SUCCESS:
      draft.lessonsLoading = false;
      draft.lessons = action.payload;
      draft.lessonsError = null;
      return;
    case LOAD_LESSONS_ERROR:
      draft.lessonsLoading = false;
      draft.lessonsError = action.error;
      return;
    case RESET_LESSON_ERROR:
      draft.error = null;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
