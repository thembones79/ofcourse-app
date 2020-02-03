import React from "react";
import { connect } from "react-redux";
import LessonEditor from "../components/LessonEditor";
import NotFoundPage from "./NotFoundPage";

const LessonPage = ({ lesson }) => {
  if (!lesson) {
    return <NotFoundPage />;
  }
  return <LessonEditor lesson={lesson} />;
};

const mapState = (state, props) => {
  const lessonId = parseInt(props.lessonId, 10);
  return {
    lesson: state.lessons.lessons[lessonId]
  };
};

export default connect(mapState)(LessonPage);
