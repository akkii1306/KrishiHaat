import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
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

    if (!isLogin && form.password !== form.confirmPassword) {
      return alert("Passwords don't match!");
    }

    try {
      const url = isLogin
        ? 'http://localhost:5000/api/users/login'
        : 'http://localhost:5000/api/users/register';

      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password };

      const res = await axios.post(url, payload);
      login(res.data); // Save in context + localStorage

      alert(isLogin ? 'Login successful' : 'Registration successful');
    } catch (err) {
      alert('Authentication failed');
      console.error(err);
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
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-base"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
            />
          )}

          <button
            type="submit"
            className="bg-[#347928] text-[#FFFBE6] py-3 rounded-md text-base font-medium hover:bg-[#2e6823] transition-colors"
          >
            {isLogin ? 'Login' : 'Register'}
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
