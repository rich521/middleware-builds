export default ({ dispatch }) => next => action => {
    console.log(action);
    // No payload or no promise then skip this middleware
    if (!action.payload || !action.payload.then) return next(action);

    action
      .payload
      .then(response => {
        // Replace promise payload with actual data
        dispatch({ ...action, payload: response.data });
      });
};
