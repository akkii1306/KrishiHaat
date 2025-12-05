import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      toast.error(t('auth.invalidEmail'));
      return;
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      toast.error(t('auth.passwordsDontMatch'));
      return;
    }

    try {
      setLoading(true);

      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password };

      // Use axiosInstance (baseURL is VITE_API_URL and already includes /api)
      const client = axiosInstance || axios;
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const res = await client.post(endpoint, payload);
      login(res.data); // Save in context + localStorage
      toast.success(isLogin ? t('auth.loginSuccess') : t('auth.registerSuccess'));
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.authFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBE6] flex justify-center items-center p-5">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#347928] text-center mb-6">
          {isLogin ? t('auth.login') : t('auth.register')}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder={t('auth.fullName')}
              required
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
              autoFocus
              aria-label={t('auth.fullName')}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder={t('auth.email')}
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-base"
            autoFocus={isLogin}
            aria-label={t('auth.email')}
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder={t('auth.password')}
              required
              value={form.password}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base w-full"
              aria-label={t('auth.password')}
            />
            <span
              className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? t('auth.hide') : t('auth.show')}
            </span>
          </div>

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('auth.confirmPassword')}
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
              aria-label={t('auth.confirmPassword')}
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#347928] text-[#FFFBE6] py-3 rounded-md text-base font-medium hover:bg-[#2e6823] transition-colors ${
              loading && 'opacity-60 cursor-not-allowed'
            }`}
          >
            {loading ? t('auth.pleaseWait') : isLogin ? t('auth.login') : t('auth.register')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? t('auth.dontHaveAccount') : t('auth.alreadyHaveAccount')}
          <span
            onClick={toggleForm}
            className="text-[#FCCD2A] font-semibold cursor-pointer ml-2"
          >
            {isLogin ? t('auth.register') : t('auth.login')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
