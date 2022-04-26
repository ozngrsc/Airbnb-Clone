import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
        alt=""
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
