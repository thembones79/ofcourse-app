import { createCourse, getCourses, createLesson } from "./api";

export const ADD_COURSE_BEGIN = "ADD_COURSE_BEGIN";
export const ADD_COURSE_SUCCESS = "ADD_COURSE_SUCCESS";
export const ADD_COURSE_ERROR = "ADD_COURSE_ERROR";
export const LOAD_COURSE_BEGIN = "LOAD_COURSE_BEGIN";
export const LOAD_COURSE_SUCCESS = "LOAD_COURSE_SUCCESS";
export const LOAD_COURSE_ERROR = "LOAD_COURSE_ERROR";
export const OPEN_NEW_COURSE_MODAL = "OPEN_NEW_COURSE_MODAL";
export const CLOSE_NEW_COURSE_MODAL = "CLOSE_NEW_COURSE_MODAL";
export const ADD_LESSON_BEGIN = "ADD_LESSON_BEGIN";
export const ADD_LESSON_SUCCESS = "ADD_LESSON_SUCCESS";
export const ADD_LESSON_ERROR = "ADD_LESSON_ERROR";

export const addCourse = (name, price) => {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(name, price)
      .then(course => {
        dispatch({ type: ADD_COURSE_SUCCESS, payload: course });
      })
      .catch(error => {
        dispatch({ type: ADD_COURSE_ERROR, error });
      });
  };
};

export const addLesson = (name, courseId) => {
  return dispatch => {
    dispatch({ type: ADD_LESSON_BEGIN });
    createLesson(name, courseId)
      .then(course => {
        dispatch({
          type: ADD_LESSON_SUCCESS,
          payload: course
        });
      })
      .catch(error => {
        dispatch({ type: ADD_LESSON_ERROR, error });
      });
  };
};

export const loadCourses = () => {
  return dispatch => {
    dispatch({ type: LOAD_COURSE_BEGIN });
    getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSE_SUCCESS,
          payload: courses
        });
      })
      .catch(error => {
        dispatch({ type: LOAD_COURSE_ERROR, error });
      });
  };
};

export const openNewCourseModal = () => ({
  type: OPEN_NEW_COURSE_MODAL
});

export const closeNewCourseModal = () => ({
  type: CLOSE_NEW_COURSE_MODAL
});
