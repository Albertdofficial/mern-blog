// we don't need to send a request to the server in order to logout
// we just need to set user in AuthContext to null
// And delete token from local storage

import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return {logout}
};
