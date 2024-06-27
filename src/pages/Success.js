import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Success = () => {
  const app = useContext(AppContext);
  app.clearProductFromCart();

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
