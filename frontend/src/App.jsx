import "./App.css";
import DetailsPage from "./components/Details";
import Edit from "./components/Edit";
import ManageBooks from "./components/ManageBooks";
import Create from "./components/Create";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import axios from 'axios'

axios.defaults.baseURL = "https://bookstore-backend-tau.vercel.app"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create />} />
        <Route path="/manage" element={<ManageBooks />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>
    </>
  );
}

export default App;
