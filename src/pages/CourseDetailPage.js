import React from "react";
import { connect } from "react-redux";

import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
import NewLesson from "../components/NewLesson";
import "./CourseDetailPage.css";

const CourseDetailPage = ({ courseId, course, loading }) => {
  console.log({ courseId, course, loading });
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
          <NewLesson />
        </div>
        <div className="lesson" />
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  console.log({ state });
  return {
    loading: state.coursesLoading,
    course: state.courses.find(c => c.id === parseInt(ownProps.courseId, 10))
  };
};

export default connect(mapState)(CourseDetailPage);
