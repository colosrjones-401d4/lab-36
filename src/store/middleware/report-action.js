export default store =>
next => action => {
    console.log('_Action_', action);
    try {
      let result = next(action);
      console.log('_State_',
      store.getState());
      return result;
    } catch (err) {
      err.action = action;
      console.error(err);
      return err;
    }
};