import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/actions/authActions';
import { useNavigate } from'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: '', password: '',});

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)); 
  };
  const navigate = useNavigate();
  const handleLogin = () =>{
    console.log('Login button clicked!');
    navigate('/Dashboard');
  }

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{height: "calc(100vh - 4.5rem)"}}>
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
