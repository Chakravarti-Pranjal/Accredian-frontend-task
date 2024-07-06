import { Form } from "react-hook-form";
import Head from "./components/Head"
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Head />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Footer />
    </BrowserRouter>
      
     
    </>
  )
}

export default App
