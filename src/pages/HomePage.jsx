import { Link } from "react-router-dom";
import PageNav from "../components/Pagenav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="./app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
