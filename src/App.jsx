import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Header from "./components/Header.jsx";
import React from "react";
import Users from "./pages/Users.jsx";

function App() {

  return (
    <>
        <div className="w-100 vh-100">
            <div className="row">
                <Header/>
            </div>
            <div className="p-3">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/users" element={<Users />}/>
                    <Route path="/books/:id" element={<BookDetails/>}/>
                </Routes>
            </div>
        </div>
    </>
  )
}

export default App
