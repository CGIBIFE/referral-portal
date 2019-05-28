import {LOGIN_USER} from "./userActions";

export const SET_PROFILES = "SET_PROFILES";
export const GET_PROFILES = "GET_PROFILES";
export const CREATE_PROFILE = "CREATE_PROFILE";

export const setProfiles = data => {
  return {
    type: SET_PROFILES,
    data
  };
};

export const getProfiles = () => {
  return {
    type: GET_PROFILES
  };
};

export const createProfile = profile => {
  return {
    type: CREATE_PROFILE,
    profile
  };
};