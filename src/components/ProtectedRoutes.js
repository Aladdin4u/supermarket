import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes ({ children }) {
    const { user } = useContext(AuthContext);
    if (!user) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };