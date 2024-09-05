import React, { useState } from 'react';
import { createUser } from './api';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user);
      navigate('/');
    } catch (error) {
      setError('Failed to create user');
    }
  };

  return (
    <>
    <h2 style={{textAlign:'center'}}>Create User</h2>
    <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        }}>
      {/* <h2>Create User</h2> */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form-control" 
          value={user.name} 
          onChange={(e) => setUser({ ...user, name: e.target.value })} 
          placeholder="Name" 
          style={{ marginBottom: '30px' }} 
        />
        <input 
          type="email" 
          className="form-control"
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
          placeholder="Email" 
          style={{ marginBottom: '30px' }}
        />
        <input 
          type="text" 
          className="form-control"
          value={user.phone} 
          onChange={(e) => setUser({ ...user, phone: e.target.value })} 
          placeholder="Phone" 
          style={{ marginBottom: '30px' }}
        />
        <button type="submit">Add Create</button>
      </form>
    </div>
    </>
  );
};

export default CreateUser;
