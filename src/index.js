import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "react-redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

const App = () => {
  return (
    <div>
      <div>hello</div>
    </div>
  );
};

ReactDIM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
