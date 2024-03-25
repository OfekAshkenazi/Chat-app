import Home from "./components/Home";
import Login from './components/auth/Login';
import Signup from "./components/auth/Signup";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"

export default function App() {

  return (
    <main className="p-4 h-screen flex items-center justify-center">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Toaster />

    </main>
  )
}

