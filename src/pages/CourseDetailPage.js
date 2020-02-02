import React, { useEffect } from "react";
import { connect } from "react-redux";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
import Lesson from "../components/Lesson";
import { loadLessons, addLesson, saveLesson } from "../actions";
import { getLessonsByCourse, getCourseById } from "../selectors";
import "./CourseDetailPage.css";

const CourseDetailPage = ({
  course,
  lessons,
  loading,
  loadLessons,
  addLesson,
  saveLesson
}) => {
  console.log({ course1: course, loading1: loading });
  const loadHelper = () => {
    console.log({ course2: course, loading2: loading });

    if (loading) {
      return <Loading />;
    }

    if (!course) {
      return <NotFoundPage />;
    }

    // dispatch an action
    loadLessons(course.id);
  };

  useEffect(loadHelper, [course]);

  return (
    <div className="CourseDetail">
      <header>
        <h1>{course.name}</h1>
      </header>
      <div className="content">
        <div className="sidebar">
          {lessons.length > 0 && (
            <ul className="lessons">
              {lessons.map(lesson => (
                <li key={lesson.id}>
                  <Lesson
                    className="lesson-item"
                    lesson={lesson}
                    onSubmit={name =>
                      saveLesson({
                        ...lesson,
                        name
                      })
                    }
                  >
                    {(edit, remove) => (
                      <div className="lesson-item">
                        <span>{lesson.name}</span>
                        <button
                          onClick={() => edit(lesson.name)}
                          className="edit-lesson-btn"
                        >
                          Edit
                        </button>
                        <button className="delete-lesson-btn" onClick={remove}>
                          Delete
                        </button>
                      </div>
                    )}
                  </Lesson>
                </li>
              ))}
            </ul>
          )}
          <Lesson
            className="add-lesson-button"
            onSubmit={title => addLesson(title, course.id)}
          >
            {edit => (
              <button className="add-lesson-button" onClick={edit}>
                New Lesson
              </button>
            )}
          </Lesson>
        </div>
        <div className="lesson" />
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  return {
    loading: state.courses.coursesLoading,
    lessons: getLessonsByCourse(state, ownProps),
    course: getCourseById(state, ownProps)
  };
};
export default connect(mapState, { loadLessons, addLesson, saveLesson })(
  CourseDetailPage
);
