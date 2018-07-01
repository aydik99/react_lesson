import { createAction } from "redux-actions";

export const loadStarted = createAction("[Comments] Load started");
export const loadCompleted = createAction("[Comments] Load completed");
export const loadFailed = createAction("[Comments] Load failed");

export const loadComments = () => (dispatch, getState) => {
  dispatch(loadStarted());
  const state = getState();
  fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=2&_page=${state.comments.page}`
  )
    .then(response => response.json())
    .then(comments => {
      dispatch(loadCompleted(comments));
    })
    .catch(error => {
      dispatch(loadFailed(error));
    });
};
