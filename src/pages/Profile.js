import { useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = async () => {
    try {
      dispatch({ type: "LOGIN_OUT" });
      await signOut(auth);
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
