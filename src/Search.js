import React from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; /* main style file */
import "react-date-range/dist/theme/default.css"; /* theme css file */
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* Date Picker Component */

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Link to="/search">
        <Button className="searchAirbnb__button">Search Airbnb</Button>
      </Link>
    </div>
  );
}

export default Search;
