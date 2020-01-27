export const createCourse = (name, price) => {
  return postData("/courses", { name, price });
};

export const getCourses = () => {
  return fetch("/courses").then(res => res.json());
};

function postData(url = ``, data = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
