import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState(""); // fixed typo 'serachParam'
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Handle input change and filter users
  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query)) // cleaner than indexOf > -1
          : [];

      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  // Handle clicking on a suggestion
  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  }

  // Fetch the list of users from API
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        // store only first names
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1> Loading Data! Please Wait. </h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}

      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}
