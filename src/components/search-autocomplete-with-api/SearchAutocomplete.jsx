import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions';
import "./searh-autocomplete.css"

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleClick = (e) => {
    setSearchParam(e.target.innerText)
    setShowDropdown(false)
    setFilteredUsers([])
  }

  const handleChange = e => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query)
    if (query.length > 1) {
      const filteredData =
        users && users.length
          // ? users.filter(user => user.toLowerCase().indexOf(query) > -1)
          ? users.filter(user => user.toLowerCase().includes(query))
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map(user => user.firstName));
        setError(null)
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  return (
    <div className="search-autocomplete-container">
      {loading
        ? <h1>Laoding Data! Please wait!</h1>
        : <input
          name="search-users"
          placeholder="Search Users here..."
          value={searchParam}
          onChange={handleChange}
        />
      }
      {showDropdown && (
        <Suggestions
          handleClick={handleClick}
          filteredUsers={filteredUsers}
        />)}
    </div>
  )
}

export default SearchAutocomplete