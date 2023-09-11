
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './auth/component/signup/SignUp';
import Login from './auth/component/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

