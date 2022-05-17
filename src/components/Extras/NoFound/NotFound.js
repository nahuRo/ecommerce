import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container noProd">
      <h1>NotFound</h1>
      <Link to="/">Inicio</Link>
    </div>
  );
};

export default NotFound;
