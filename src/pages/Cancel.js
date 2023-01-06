import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <>
      <h1>Sorry to see you cancel your stripe payment!</h1>
      <Link to="/" className="btn btn-default">
        Return Home
      </Link>
    </>
  );
};

export default Cancel;
