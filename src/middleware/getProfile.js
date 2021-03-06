import { GET_PROFILES, setProfiles } from "../actions/profileActions";
import { constants } from "../utility/constants";

const getProfile = store => next => async action => {
  next(action);

  if (action.type !== GET_PROFILES) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(`${constants.host}/candidates/`).then(data =>
      data.json()
    );

    if (data) {
      dispatch(setProfiles(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getProfile };
