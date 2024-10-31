import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './styleLogin.modules/Login.module.css';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate.jsx';
import LoginPasswordLost from './LoginPasswordLost.jsx';
import LoginPasswordReset from './LoginPasswordReset.jsx';
import { UserContext } from '../../UserContext.jsx';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
