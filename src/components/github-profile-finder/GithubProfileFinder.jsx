import React, { useEffect, useState } from 'react';
import "./githubFinder.css";
import User from './User';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('IraPolchanin');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    fetchGitHubUserData();
  };

  const fetchGitHubUserData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`https://api.github.com/users/${userName}`);
      const data = await resp.json();
      if (data) {
        setUserData(data);
        setUserName('')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchGitHubUserData()
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }


  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  )
}

export default GithubProfileFinder