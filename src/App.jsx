import './App.css'
import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/welcome" element={<Welcome />}/>
            <Route path="/books/:id" element={<BookDetails />} />
        </Routes>

    </>
  )
}

export default App
