import Login from "./components/Login";
import Signup from './components/Signup';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <main className="p-4 h-screen flex items-center justify-center">


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
      </Routes>

    </main>
  )
}

