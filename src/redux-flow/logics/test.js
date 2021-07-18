import api from "../../services/api";
import { userSuccess, userError, getUser } from "../actions/test";

export const loadUser = (user) => async (dispatch) => {
  dispatch(getUser());
  await api
    .get(`/users/${user}`)
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((error) => {
      dispatch(
        userError(
          error && error.response && error.response.data
            ? error.response.data.message
            : "An error has occurred"
        )
      );
    });
};

export default loadUser;
