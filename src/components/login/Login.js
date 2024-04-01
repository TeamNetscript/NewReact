import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

async function loginUser(credentials) {
 return fetch('http://localhost:3000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    setError('');

    try {
      const token = await loginUser({ username, password });
      setToken(token);
    } catch (error) {
      setError('Invalid username or password.');
    }
  }

  return(
    <>	
  	<div className="login-wrapper">
  	  <h1>Please Log In</h1>
  	  <form onSubmit={handleSubmit}>
  	    <label>
  	      <p>Username</p>
  	      <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
  	    </label>
  	    <label>
  	      <p>Password</p>
  	      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
  	    </label>
  	    {error && <div style={{ color: 'red' }}>{error}</div>}
  	    <div>
  	      <button type="submit">Submit</button>
  	    </div>
  	  </form>
  	</div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};