import React, { useState } from "react";

import "./NewLesson.css";

const NewLesson = () => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const commitEdit = e => {
    e.preventDefault();
  };
  return editing ? (
    <form className="add-lesson-button editing" onSubmit={commitEdit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Name the lesson"
      />
    </form>
  ) : (
    <button className="add-lesson-button" onCLick={() => setEditing(true)}>
      New Lesson
    </button>
  );
};

export default NewLesson;
