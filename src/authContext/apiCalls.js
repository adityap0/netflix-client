import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./AuthActions";
require("dotenv").config();

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_ROOT_URL + "auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
    console.log(res);
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_ROOT_URL + "auth/register",
      user
    );
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
