import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-[#FFFBE6] flex justify-center items-center p-5">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#347928] text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="px-4 py-3 border border-gray-300 rounded-md text-base"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="px-4 py-3 border border-gray-300 rounded-md text-base"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="px-4 py-3 border border-gray-300 rounded-md text-base"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
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
