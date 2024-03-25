import Home from "./components/Home";
import Login from './components/auth/Login';
import Signup from "./components/auth/Signup";

import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const { loggedinUser } = useAuthContext()

  return (
    <main className="p-4 h-screen flex items-center justify-center">

      <Routes>
        <Route path="/" element={loggedinUser ? < Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={loggedinUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={loggedinUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />

    </main>
  )
}

