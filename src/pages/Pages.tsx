import React, { useState, useEffect } from 'react';
import {getUser, updateUser} from '../service/auth';
import { User } from '../types/User';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({ id: '', username: '', email: '' });
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await getUser(token);
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const updatedUser = await updateUser(token, { ...user, password });
        setUser(updatedUser);
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Failed to update profile', error);
      }
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
