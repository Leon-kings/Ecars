// import React from 'react';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Simulate successful login
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
