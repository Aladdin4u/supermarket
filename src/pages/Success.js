import { useEffect } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  useEffect(() => {
    localStorage.removeItem("cart")
  },[])
  return (
    <>
      <h1>Thank you for your purchase!</h1>
      <Link to="/" className="btn btn-default">
        Return Home
      </Link>
    </>
  );
};

export default Success;
