import {
  GET_SCHEDULE_BY_DATE,
  storeScheduleForDate
} from "../actions/calenderActions";

const getScheduleByDate = store => next => async action => {
  next(action);

  if (action.type !== GET_SCHEDULE_BY_DATE) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch("api/schedule.json", {
    })
      .then(data => data.json());

    if (data) {
      dispatch(storeScheduleForDate(data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getScheduleByDate };
