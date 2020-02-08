import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Match } from "@reach/router";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
import Lesson from "../components/Lesson";
import LoginLogout from "../components/LoginLogout";
import {
  loadLessons,
  addLesson,
  saveLesson,
  togglePreviewMode
} from "../actions";
import { getLessonsByCourse, getCourseById } from "../selectors";
import "./CourseDetailPage.css";

const CourseDetailPage = ({
  course,
  lessons,
  loading,
  loadLessons,
  addLesson,
  saveLesson,
  children,
  togglePreviewMode,
  previewMode
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
        <h1>{course ? course.name : "Please wait"}</h1>
        <button className="prebiew-btn" onClick={togglePreviewMode}>
          {previewMode ? "Edit" : "Preview"}
        </button>
        <LoginLogout />
      </header>
      <div className="content">
        <div className="sidebar">
          {lessons.length > 0 && (
            <ul className="lessons">
              {lessons.map(lesson => (
                <Match key={lesson.id} path={`lessons/${lesson.id}`}>
                  {({ match }) => {
                    const className = `lesson-item ${match ? "selected" : ""}`;
                    return (
                      <li>
                        <Lesson
                          className={className}
                          lesson={lesson}
                          onSubmit={name =>
                            saveLesson({
                              ...lesson,
                              name
                            })
                          }
                        >
                          {(edit, remove) => (
                            <div className={className}>
                              <Link to={`lessons/${lesson.id}`}>
                                {lesson.name}
                              </Link>
                              <button
                                onClick={() => edit(lesson.name)}
                                className="edit-lesson-btn"
                              >
                                Edit
                              </button>
                              <button
                                className="delete-lesson-btn"
                                onClick={remove}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </Lesson>
                      </li>
                    );
                  }}
                </Match>
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
        <div className="lesson">{children}</div>
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  return {
    previewMode: state.app.previewMode,
    loading: state.courses.coursesLoading,
    lessons: getLessonsByCourse(state, ownProps),
    course: getCourseById(state, ownProps)
  };
};
export default connect(mapState, {
  loadLessons,
  addLesson,
  saveLesson,
  togglePreviewMode
})(CourseDetailPage);
