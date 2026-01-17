

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

