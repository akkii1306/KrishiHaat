import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      setLoading(true);
   const BASE_URL = import.meta.env.VITE_API_URL;
const url = isLogin
  ? `${BASE_URL}/api/auth/login`
  : `${BASE_URL}/api/auth/register`;


      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password };

      const res = await axios.post(url, payload);
      login(res.data); // Save in context + localStorage
      toast.success(isLogin ? 'Login successful' : 'Registration successful');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBE6] flex justify-center items-center p-5">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#347928] text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
              autoFocus
              aria-label="Full Name"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-base"
            autoFocus={isLogin}
            aria-label="Email"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base w-full"
              aria-label="Password"
            />
            <span
              className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
              aria-label="Confirm Password"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#347928] text-[#FFFBE6] py-3 rounded-md text-base font-medium hover:bg-[#2e6823] transition-colors ${
              loading && 'opacity-60 cursor-not-allowed'
            }`}
          >
            {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={toggleForm}
            className="text-[#FCCD2A] font-semibold cursor-pointer ml-2"
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
