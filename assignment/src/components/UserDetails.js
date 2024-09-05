import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, fetchUsers } from './api';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUsers();
        const user = response.data.find(user => user.id === parseInt(id));
        setUser(user);
      } catch (error) {
        setError('Failed to load user data');
      }
    };
    getUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      navigate('/');
    } catch (error) {
      setError('Failed to update user');
    }
  };

  return (
    <>
    <h2 style={{textAlign:'center'}}>Edit User</h2>
    <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        }}>
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
        <button type="submit">Update</button>
      </form>
    </div>
    </>
  );
};

export default UserDetails;
