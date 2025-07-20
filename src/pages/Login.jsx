import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login() {
  const { loginEmail, loginGoogle, loginPhone } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const recaptchaId = 'recaptcha-container';

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      await loginEmail({ email, password });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePhone = async (e) => {
    e.preventDefault();
    try {
      await loginPhone({ phoneNumber: phone, recaptchaId });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout className="p-8 text-black">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleEmail} className="flex flex-col space-y-4 max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Login with Email
        </button>
      </form>
      <button
        onClick={handleGoogle}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Login with Google
      </button>
      <form onSubmit={handlePhone} className="flex flex-col space-y-4 max-w-xs mt-4">
        <div id={recaptchaId}></div>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Login with Phone
        </button>
      </form>
    </Layout>
  );
}
