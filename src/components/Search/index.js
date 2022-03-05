import React, { useEffect, useState } from "react";
import MOCK_DATA from "../../MOCK_DATA.json";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import "./style.scss";

const Search = () => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {

  }, [])

  const onSearchChange = (e) => {
    let list = [];
    const onSearchBar = e.target.value
    const searchContext = (param) => MOCK_DATA.filter(person => person[param].includes(onSearchBar))
    if(onSearchBar){
      if(isNaN(onSearchBar)){      
        list = searchContext("fullname")
        return setSearchList(list)
      }
      list = searchContext("policy_no")
      return setSearchList(list)
    }
    return setSearchList([])
  }

  const SearchDropdown = () => searchList.map(person => {
      const {fullname, phone_number, email, policy_no, id} = person
      return(
        <div className="search-row" key={id}>
          <h2 className="search-row-header">
            {fullname}
          </h2>
          <div className="search-row-details">
            <p className="phone-number">
              <BsFillTelephoneFill/>
              {phone_number}
            </p>
            <p className="email">
              <MdAlternateEmail/>
              {email}
            </p>
            <p className="policy-no">
              <IoDocumentText/>
              Policy No: {policy_no}
            </p>
          </div>
        </div>)
    })

  return (
    <div className="search-form">
      <div className="search-bar"> 
        <AiOutlineSearch color="#8e8a9c"/>
        <input placeholder="SEARCH (Client Name / Policy Number)" className="search-bar-input" onChange={e => onSearchChange(e)}/>
      </div>
      <div className="search-dropdown">
        <SearchDropdown/>
      </div>
    </div>
  );
}

export default Search;