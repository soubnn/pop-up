import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    togglePopup();
  };

  return (
    <div className="App">
      <h1>Create new account!</h1>
      <button style={{ backgroundColor: '#4caf50', }} onClick={togglePopup}>Click</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Sign Up</h2>
            <form style={{ marginRight: '15px' }} onSubmit={handleSubmit}>

              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <button className='b-bttn' style={{ marginLeft: '100px', marginBottom: '5px' }}
                type="submit">Sign Up</button>
            </form>
            <button className='b-bttn' style={{ backgroundColor: '#ce1e1e' }} onClick={togglePopup}>Close</button>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default App;
