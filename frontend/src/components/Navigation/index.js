import React,{useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal"
import * as sessionActions from "../../store/session";
import logogray from "../../images/logogray.png";
import AboutModal from "./AboutModal";

import "./Navigation.css";

function Navigation({ isLoaded }) {
 const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

const demonLogin = async () => {
  setCredential("demo@user.io");
  setPassword("password");
  return dispatch(

    sessionActions.login({ credential: "demo@user.io", password: "password" })
  );
}

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button onClick={demonLogin} className="demoBtn">
          demo login
        </button>
      </>
    );
  }

  return (
    <nav className="navCon">
      <nav className="navbar">
        <NavLink exact to="/" className="homeLink">
          <img src={logogray} alt="record player" className="homebBtn" />
        </NavLink>
        <ul className="sessionLinks">
          <li>{isLoaded && sessionLinks}</li>
        </ul>
      </nav>
      <div className="discoverSentence">
        Discover amazing new music and{" "}
        <span className="midSentence">directly support</span> the artists who
        make it.
        <span className="allArtists">
          <Link to="/artists">All Artists</Link>
        </span>
        <span className="allSongs">
          <Link to="/songs">Music</Link>
        </span>
        <span>
          <AboutModal />
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
