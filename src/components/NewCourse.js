import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { addCourse } from "../actions";
import "./NewCourse.css";

const NewCourse = ({ dispatch, saveInProgress, saveError }) => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCourse(courseName, coursePrice));
  };
  return (
    <div className="NewCourse">
      <h1>Create Your First Course</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Pick a name:
          <input
            ref={inputRef}
            value={courseName}
            disabled={saveInProgress}
            onChange={e => setCourseName(e.target.value)}
          />
        </label>
        <label>
          Set a price:
          <input
            value={coursePrice}
            disabled={saveInProgress}
            onChange={e => setCoursePrice(e.target.value)}
          />
          {saveError && (
            <div className="saveError-message">Error: {saveError.message}</div>
          )}
        </label>
        <button type="submit" disabled={saveInProgress}>
          Create Course
        </button>
      </form>
    </div>
  );
};
const mapState = state => ({
  saveInProgress: state.courses.saveInProgress,
  saveError: state.courses.saveError
});

export default connect(mapState)(NewCourse);
