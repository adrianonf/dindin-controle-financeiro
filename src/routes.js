
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { getItem } from './utils/localStorage'

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo={'/'} />}>

        <Route path='/main' element={<Main />} />
      </Route>
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
}

export default MainRoutes;
