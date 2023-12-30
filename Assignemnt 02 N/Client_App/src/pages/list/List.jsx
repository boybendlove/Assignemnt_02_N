import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { useEffect } from 'react';
import { useHotelSearchContext } from '../../components/searchItem/searchContext';
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from 'axios';

const List = () => {
  const { searchCriteria } = useHotelSearchContext();
  const [searchResults,setSearchResults] = useState("")
  console.log(searchCriteria)
  useEffect(() => {
    const mockAPICall = async () => {
     try {
      const response = axios.get(`http://localhost:5000/api/search/search_hotels?city=${searchCriteria.city}&startDate=${searchCriteria.startDate}&endDate=${searchCriteria.endDate}&numRooms=${searchCriteria.numRooms}&numPeople=${searchCriteria.numPeople}`)

    console.log(response.data)
    setSearchResults(response.data);
     } catch (error) {
    console.error('Error:', error);
  };
    };

    mockAPICall();
  }, [searchCriteria, setSearchResults]);
  console.log(searchResults)
  // const [destination, setDestination] = useState(searchResults.city);
  // const [date, setDate] = useState(searchResults.startDate);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(searchResults.numPeople);

  return (
    <div>
      <Navbar />
      {/* <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div> */}
          {/* <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
};

export default List;
