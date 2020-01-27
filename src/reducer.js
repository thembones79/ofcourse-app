import produce from "immer";
import {
  ADD_COURSE_BEGIN,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_ERROR,
  LOAD_COURSE_BEGIN,
  LOAD_COURSE_SUCCESS,
  LOAD_COURSE_ERROR
} from "./actions";

const initialState = {
  coursesLoading: false,
  courses: [],
  coursesError: null,
  saveInProgress: false,
  saveError: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
      return;
    case ADD_COURSE_SUCCESS:
      draft.saveInProgress = false;
      draft.courses.push(action.payload);
      draft.saveError = null;
      return;
    case ADD_COURSE_ERROR:
      draft.saveInProgress = false;
      draft.saveError = action.error;
      return;
    case LOAD_COURSE_BEGIN:
      draft.coursesLoading = true;
      draft.coursesError = null;
      return;
    case LOAD_COURSE_SUCCESS:
      draft.coursesLoading = false;
      draft.courses = action.payload;
      draft.coursesError = null;
      return;
    case LOAD_COURSE_ERROR:
      draft.coursesLoading = false;
      draft.coursesError = action.error;
      return;

    default:
      return;
  }
}, initialState);

export default reducer;
