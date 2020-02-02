import React, { useEffect } from "react";
import { connect } from "react-redux";

import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
import NewLesson from "../components/NewLesson";
import { loadLessons } from "../actions";
import { getLessonsByCourse, getCourseById } from "../selectors";
import "./CourseDetailPage.css";

const CourseDetailPage = ({ course, lessons, loading, loadLessons }) => {
  useEffect(() => {
    // dispatch an action that will do the fetch (lessons fetch)
    loadLessons(course.id);
  }, [course]);

  if (loading) {
    return <Loading />;
  }

  if (!course) {
    return <NotFoundPage />;
  }

  return (
    <div className="CourseDetail">
      <header>
        <h1>{course.name}</h1>
      </header>
      <div className="content">
        <div className="sidebar">
          {lessons.length > 0 && (
            <ul>
              {lessons.map(lesson => (
                <li key={lesson.id}>{lesson.name}</li>
              ))}
            </ul>
          )}
          <NewLesson courseId={course.id} />
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

export default connect(mapState, { loadLessons })(CourseDetailPage);
