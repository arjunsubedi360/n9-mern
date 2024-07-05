import React, { useState } from 'react';
import User from './User'; // Make sure the path is correct

function SearchForm() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  console.log("username", username);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUsername(username);
  };

  const handleUsernameChange = (event) => {
    // console.log("event", event);
    setUsername(event.target.value); // passing every change value inside setUsername
  }
  return (
    <div>
      <h1>GitHub User Lookup</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange}  //this will run on every change (onChange)
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {submittedUsername && <User username={submittedUsername} />}
    </div>
  );
}

export default SearchForm;
