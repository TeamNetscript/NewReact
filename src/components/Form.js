import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('')  
  const [lastName, setLastName] = useState('')  
  const [mobile, setMobile] = useState('')  
  const [age, setAge] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  return (
    
    <div className="main"> 
      <div className="container">
        <div className="form_main">
          <div className="form_title">
            <h2>Contact us</h2>
          </div>
          <form> 
            <label>
              <input
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />   
            </label>
            <label>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              /> 
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

 function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Form;