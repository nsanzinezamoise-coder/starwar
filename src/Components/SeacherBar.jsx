import React, { useState, useEffect } from "react";

export default function UserSearchApp() {
  const [users, setUsers] = useState([]); // Store users fetched from the API
  const [query, setQuery] = useState(""); // Store the search query

  // Fetch users from the API on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Search</h1>
      
      {/* Search Bar */}
      <input
      className="form-control"
        type="text"
        placeholder="Search users by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Display Filtered Users */}
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
}


