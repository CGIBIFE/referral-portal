import { GET_STATUS_LIST, setStatusList } from "../actions/prefillActions";
import { constants } from "../utility/constants";

const getStatusList = store => next => async action => {
  next(action);

  if (action.type !== GET_STATUS_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(`${constants.host}/candidates/status`).then(data =>
      data.json()
    );

    if (data) {
      dispatch(setStatusList(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getStatusList };
