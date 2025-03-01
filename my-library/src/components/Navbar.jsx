import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <nav>
      <h2>My Library</h2>
      <Link to="/">Home</Link>
      {user ? <Link to="/my-books">My Books</Link> : <Link to="/login">Login</Link>}
      {user && <button onClick={() => dispatch(logoutUser())}>Logout</button>}
    </nav>
  );
};

export default Navbar;
