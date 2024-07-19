import React from 'react';
import LoginForm from '~/components/LoginForm'; // Upewnij się, że ścieżka jest poprawna

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
